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

import { grpc } from "@improbable-eng/grpc-web"; 
import { BrowserIPC } from "./generated/webwindow_pb_service";
import { StringRequest, EmptyRequest   } from "./generated/webwindow_pb";

let connection: signalR.HubConnection;

export function sendMessage(message: string) {
    var req = new StringRequest();
    req.setRequest(message);
    grpc.invoke(BrowserIPC.SendMessage, {
        request: req, host: "https://localhost:443", onEnd: (code, msg, trailers) => {
            if (code == grpc.Code.OK) {
                console.log("all ok")
            } else {
                console.log("hit an error", code, msg, trailers);
            }
        }
    });


    //connection.invoke("SendMessage", "userid", message).catch(err => {
    //     console.error("SendMessage Failed" + err.toString());
    //});
}

//protoc.exe ..\protos\webwindow.proto --js_out="import_style=commonjs,binary:." --grpc-web-out="import_style=typescript,mode=grpcwebtext:."

// protoc --plugin=protoc-gen-ts="C:\Users\budcr\source\repos\MyWebWindow\src\RemoteWebWindow.Blazor.JS\node_modules\.bin\protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:src/app/generated" --ts_out="service=grpc-web:src/app/generated" ..\protos\webwindow.proto
// https://github.com/grpc/grpc-web/blob/master/net/grpc/gateway/examples/echo/ts-example/client.ts
//  .\protoc.exe -I..\protos webwindow.proto --plugin=protoc-gen-grpc-web.exe=. --js_out=import_style=commonjs,binary:. --grpc-web-out=import_style=typescript,mode=grpcwebtext:.


//  protoc --plugin=protoc-gen-ts="C:\Users\budcr\source\repos\MyWebWindow\src\RemoteWebWindow.Blazor.JS\node_modules\.bin\protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:src/generated" --ts_out="service=grpc-web:src/generated" -I..\protos webwindow.proto 

function boot() {

    var message = new EmptyRequest();
 
    grpc.invoke(BrowserIPC.ReceiveMessage,
        {
            request: message,
            host: "https://localhost:443",
            onMessage: (message: StringRequest) => {
                console.info("Received: " + message.getRequest());
                receiveMessage(message.getRequest());
            },
            onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
                if (code == grpc.Code.OK) {
                    console.log("all ok")
                } else {
                    console.log("hit an error", code, msg, trailers);
                }
            }
        });
   // client.onMessage = res => {
       
        //'var result = res as StringRequest;
       // console.info("Received: " + res);
        //receiveMessage(result);
   // }
       
        //transport: 
        //request: message, host: "https://localhost:443", onEnd: res => {
        //    const { status, message } = res;
        //    if (status === grpc.Code.OK && message) {
        //        var result = message.toObject() as StringRequest.AsObject;
        //        console.info("Received: " + result.request);
        //        receiveMessage(result.request);
}
       
    


    ipc.send('components:init', [
        navigationManagerFunctions.getLocationHref().replace(/\/index\.html$/, ''),
        navigationManagerFunctions.getBaseURI()]);

    //connection = new signalR.HubConnectionBuilder().withUrl("/webWindowHub").build();

    //connection.start().then(() => {
    //    console.info("Connection successful");
    //    // Confirm that the JS side is ready for the app to start
    //    ipc.send('components:init', [
    //        navigationManagerFunctions.getLocationHref().replace(/\/index\.html$/, ''),
    //        navigationManagerFunctions.getBaseURI()]);
    //}).catch(err => {
    //    console.error("Unable to connect to SignalR hub");

    //    console.error(err.toString());
    //});

    //connection.on("ReceiveMessage", message => { console.info("Received: " + message);receiveMessage(message) })


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

  
boot();
