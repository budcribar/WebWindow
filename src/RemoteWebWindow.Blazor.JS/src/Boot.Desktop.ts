import '@dotnet/jsinterop/dist/Microsoft.JSInterop';
import '@browserjs/GlobalExports';
import { OutOfProcessRenderBatch } from '@browserjs/Rendering/RenderBatch/OutOfProcessRenderBatch';
import { setEventDispatcher } from '@browserjs/Rendering/RendererEventDispatcher';
import { internalFunctions as navigationManagerFunctions } from '@browserjs/Services/NavigationManager';
import { renderBatch } from '@browserjs/Rendering/Renderer';
import { decode } from 'base64-arraybuffer';
import * as ipc from './IPC';
import * as signalR from '@aspnet/signalr';
import { receiveMessage } from './IPC';

let connection: signalR.HubConnection;

export function sendMessage(message: string) {
    connection.invoke("SendMessage", "userid", message).catch(err => {
         console.error("SendMessage Failed" + err.toString());
    });
}

function boot() {
    connection = new signalR.HubConnectionBuilder().withUrl("/webWindowHub").build();

    connection.start().then(() => {
        console.info("Connection successful");
        // Confirm that the JS side is ready for the app to start
        ipc.send('components:init', [
            navigationManagerFunctions.getLocationHref().replace(/\/index\.html$/, ''),
            navigationManagerFunctions.getBaseURI()]);
    }).catch(err => {
        console.error("Unable to connect to SignalR hub");

        console.error(err.toString());
    });

    connection.on("ReceiveMessage", message => { console.info("Received: " + message);receiveMessage(message) })


  setEventDispatcher((eventDescriptor, eventArgs) => DotNet.invokeMethodAsync('WebWindow.Blazor', 'DispatchEvent', eventDescriptor, JSON.stringify(eventArgs)));
  navigationManagerFunctions.listenForNavigationEvents((uri: string, intercepted: boolean) => {
    return DotNet.invokeMethodAsync('WebWindow.Blazor', 'NotifyLocationChanged', uri, intercepted);
  });

  // Configure the mechanism for JS<->NET calls
  DotNet.attachDispatcher({
    beginInvokeDotNetFromJS: (callId: number, assemblyName: string | null, methodIdentifier: string, dotNetObjectId: number | null, argsJson: string) => {
      ipc.send('BeginInvokeDotNetFromJS', [callId ? callId.toString() : null, assemblyName, methodIdentifier, dotNetObjectId || 0, argsJson]);
    },
    endInvokeJSFromDotNet: (callId: number, succeeded: boolean, resultOrError: any) => {
      ipc.send('EndInvokeJSFromDotNet', [callId, succeeded, resultOrError]);
    }
  });

  navigationManagerFunctions.enableNavigationInterception();

  ipc.on('JS.BeginInvokeJS', (asyncHandle, identifier, argsJson) => {
    DotNet.jsCallDispatcher.beginInvokeJSFromDotNet(asyncHandle, identifier, argsJson);
  });

  ipc.on('JS.EndInvokeDotNet', (callId, success, resultOrError) => {
    DotNet.jsCallDispatcher.endInvokeDotNetFromJS(callId, success, resultOrError);
  });

  ipc.on('JS.RenderBatch', (rendererId, batchBase64) => {
    var batchData = new Uint8Array(decode(batchBase64));
    renderBatch(rendererId, new OutOfProcessRenderBatch(batchData));
  });

  ipc.on('JS.Error', (message) => {
    console.error(message);
  });

  
}

boot();
