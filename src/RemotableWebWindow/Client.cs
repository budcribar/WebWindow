// This code was generated by a tool
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Net.Client;
using Google.Protobuf;
using System.Drawing;
using System.Collections.Generic;
using System.Collections.Concurrent;
using Google.Protobuf.WellKnownTypes;

namespace PeakSwc.RemoteableWebWindows
{
    public class WebWindowTunnel
    {
        private readonly Uri tunnelUri;
        private readonly Uri serverUri;
        private readonly object syncLock = new object();  

        public WebWindowTunnel(Uri tunnelUri, Uri serverUri)
        {
            // Constructor
            this.tunnelUri = tunnelUri;
            this.serverUri = serverUri;
        }

        public void Start() {
           Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetHeightRequest(new Empty());
      var resp = ServerClient.GetHeight(request);
      TunnelClient.TunnelGetHeightResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetHeightRequest(new Empty());
      var resp = ServerClient.SetHeight(request);
      TunnelClient.TunnelSetHeightResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetLeftRequest(new Empty());
      var resp = ServerClient.GetLeft(request);
      TunnelClient.TunnelGetLeftResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetLeftRequest(new Empty());
      var resp = ServerClient.SetLeft(request);
      TunnelClient.TunnelSetLeftResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetLocationRequest(new Empty());
      var resp = ServerClient.GetLocation(request);
      TunnelClient.TunnelGetLocationResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetLocationRequest(new Empty());
      var resp = ServerClient.SetLocation(request);
      TunnelClient.TunnelSetLocationResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetMonitorsRequest(new Empty());
      var resp = ServerClient.GetMonitors(request);
      TunnelClient.TunnelGetMonitorsResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetResizableRequest(new Empty());
      var resp = ServerClient.GetResizable(request);
      TunnelClient.TunnelGetResizableResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetResizableRequest(new Empty());
      var resp = ServerClient.SetResizable(request);
      TunnelClient.TunnelSetResizableResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetScreenDpiRequest(new Empty());
      var resp = ServerClient.GetScreenDpi(request);
      TunnelClient.TunnelGetScreenDpiResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSendMessageRequest(new Empty());
      var resp = ServerClient.SendMessage(request);
      TunnelClient.TunnelSendMessageResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetIconFileRequest(new Empty());
      var resp = ServerClient.SetIconFile(request);
      TunnelClient.TunnelSetIconFileResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelShowRequest(new Empty());
      var resp = ServerClient.Show(request);
      TunnelClient.TunnelShowResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelShowMessageRequest(new Empty());
      var resp = ServerClient.ShowMessage(request);
      TunnelClient.TunnelShowMessageResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetSizeRequest(new Empty());
      var resp = ServerClient.GetSize(request);
      TunnelClient.TunnelGetSizeResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetSizeRequest(new Empty());
      var resp = ServerClient.SetSize(request);
      TunnelClient.TunnelSetSizeResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetTitleRequest(new Empty());
      var resp = ServerClient.GetTitle(request);
      TunnelClient.TunnelGetTitleResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetTitleRequest(new Empty());
      var resp = ServerClient.SetTitle(request);
      TunnelClient.TunnelSetTitleResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetTopRequest(new Empty());
      var resp = ServerClient.GetTop(request);
      TunnelClient.TunnelGetTopResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetTopRequest(new Empty());
      var resp = ServerClient.SetTop(request);
      TunnelClient.TunnelSetTopResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetTopmostRequest(new Empty());
      var resp = ServerClient.GetTopmost(request);
      TunnelClient.TunnelGetTopmostResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetTopmostRequest(new Empty());
      var resp = ServerClient.SetTopmost(request);
      TunnelClient.TunnelSetTopmostResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelNavigateToLocalFileRequest(new Empty());
      var resp = ServerClient.NavigateToLocalFile(request);
      TunnelClient.TunnelNavigateToLocalFileResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelNavigateToStringRequest(new Empty());
      var resp = ServerClient.NavigateToString(request);
      TunnelClient.TunnelNavigateToStringResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelNavigateToUrlRequest(new Empty());
      var resp = ServerClient.NavigateToUrl(request);
      TunnelClient.TunnelNavigateToUrlResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelWaitForExitRequest(new Empty());
      var resp = ServerClient.WaitForExit(request);
      TunnelClient.TunnelWaitForExitResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelGetWidthRequest(new Empty());
      var resp = ServerClient.GetWidth(request);
      TunnelClient.TunnelGetWidthResponse(resp);
   }
});
Task.Run(() =>
{
   while (true)
   {
      var request = TunnelClient.TunnelSetWidthRequest(new Empty());
      var resp = ServerClient.SetWidth(request);
      TunnelClient.TunnelSetWidthResponse(resp);
   }
});
Task.Run(() =>
{
    while (true)
    {
        var request = TunnelClient.TunnelCreateWebWindowRequest(new Empty());
        var respStream = ServerClient.CreateWebWindow(request);
        Task.Run(async () =>
        {
            await foreach (var resp in respStream.ResponseStream.ReadAllAsync())
                TunnelClient.TunnelCreateWebWindowResponse(resp);
        });
    }
});
Task.Run(async() =>
{
    while (true)
    {
        var respStream = ServerClient.FileReader();
        var task = Task.Run( () =>
        {
            while (true)
            {
               var request = TunnelClient.TunnelFileReaderRequest(new Empty());
               respStream.RequestStream.WriteAsync(request);
            }
         });
         await foreach (var resp in respStream.ResponseStream.ReadAllAsync())
             TunnelClient.TunnelFileReaderResponse(resp);
    }
});
        }

        private RemoteWebWindow.RemoteWebWindowClient tunnelClient = null;
        private RemoteWebWindow.RemoteWebWindowClient serverClient = null;

        public RemoteWebWindow.RemoteWebWindowClient TunnelClient {
            get
            {
                lock (syncLock) 
                if (tunnelClient == null)
                {
                    var channel = GrpcChannel.ForAddress(tunnelUri);

                    tunnelClient = new  RemoteWebWindow.RemoteWebWindowClient(channel);
                }
                return tunnelClient;
            }
        } 
        
        public RemoteWebWindow.RemoteWebWindowClient ServerClient {
            get
            {
                lock (syncLock) 
                if (serverClient == null)
                {
                    var channel = GrpcChannel.ForAddress(serverUri);

                    serverClient = new  RemoteWebWindow.RemoteWebWindowClient(channel);
                }
                return serverClient;
            }
        }   

       
        
    }
}
