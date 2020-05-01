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
import { StringRequest, EmptyRequest, IntMessageResponse   } from "./generated/webwindow_pb";

export function sendMessage(message: string) {
    var req = new StringRequest();
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

    var message = new EmptyRequest();

    //grpc.invoke(BrowserIPC.GetHeight,
    //    {
    //        request: message,
    //        host: "https://localhost:443",
    //        onMessage: (message: IntMessageResponse) => {
                
    //            message.setResponse(window.outerHeight);
    //            console.info("GetHeight: " + window.outerHeight);
    //        },
    //        onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
    //            if (code == grpc.Code.OK) {
    //                console.log("all ok")
    //            } else {
    //                console.log("hit an error", code, msg, trailers);
    //            }
    //        }
    //    });

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

    width: function (id) {

        return window.outerWidth;
    },
    height: function (id) {
        return window.outerHeight;
    },
    left: function (id) {
        return window.screenLeft;
    },
    setLeft: function (id, left) {
        return window.moveTo(left, window.screenY)
    },
    location: function (id) {
        return { X: window.screenX, Y: window.screenY }
    },
    top: function (id) {
        return window.screenTop;
    },
    size: function (id) {
        return { Height: window.outerHeight, Width: window.outerWidth }
    },


};
  
boot();
