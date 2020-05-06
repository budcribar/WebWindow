import '@dotnet/jsinterop/dist/Microsoft.JSInterop';
import '@browserjs/GlobalExports';
import { OutOfProcessRenderBatch } from '@browserjs/Rendering/RenderBatch/OutOfProcessRenderBatch';
import { setEventDispatcher } from '@browserjs/Rendering/RendererEventDispatcher';
import { internalFunctions as navigationManagerFunctions } from '@browserjs/Services/NavigationManager';
import { renderBatch } from '@browserjs/Rendering/Renderer';
import { decode } from 'base64-arraybuffer';
import * as ipc from './IPC';
import { receiveMessage } from './IPC';
import { grpc } from "@improbable-eng/grpc-web"; 
import { BrowserIPC } from "./generated/webwindow_pb_service";
import { StringRequest, IdMessageRequest   } from "./generated/webwindow_pb";
declare var webWindow: any;

export function sendMessage(message: string) {
    var req = new StringRequest();
    req.setId(webWindow.guid);
    req.setRequest(message);
    grpc.invoke(BrowserIPC.SendMessage, {
        request: req, host: "https://localhost:443", onEnd: (code, msg, trailers) => {
            if (code == grpc.Code.OK) {
                console.log("sent:" + message)
            } else {
                console.log("hit an error", code, msg, trailers);
            }
        }
    });
}

function boot() {

    var message = new IdMessageRequest();
    message.setId(webWindow.guid);

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


    ipc.send('components:init', [
        navigationManagerFunctions.getLocationHref().replace(/\/index\.html$/, ''),
        navigationManagerFunctions.getBaseURI()]);

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

(<any>window).RemoteWebWindow = {

    width: function () {

        return window.outerWidth;
    },
    setWidth: function (width) {
        window.resizeTo(width, window.outerHeight);
    },
    height: function () {
        return window.outerHeight;
    },
    setHeight: function (height) {
        window.resizeTo(window.outerWidth, height);
    },

    left: function () {
        return window.screenLeft;
    },
    setLeft: function (left) {
        window.moveTo(left, window.screenY)
    },
    location: function () {
        return { X: window.screenX, Y: window.screenY }
    },
    setLocation: function (location) {
        window.moveTo(location.x, location.y)
    },
    top: function () {
        return window.screenTop;
    },
    setTop: function (top) {
        window.moveTo(window.screenX, top);
    },
    size: function () {
        return { Height: window.outerHeight, Width: window.outerWidth }
    },

    title: function () {
        return window.document.title
    },

    setTitle: function (title) {
        return window.document.title = title;
    },
    setSize: function (size) {
        return window.resizeTo(size.width, size.height);
    },

};
  
boot();
