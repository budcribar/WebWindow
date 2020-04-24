using Grpc.Core;
using Microsoft.AspNet.SignalR.Infrastructure;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using PeakSwc.RemoteableWebWindows;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace RemoteableWebWindowService
{
    public class IPC
    {
        public IServerStreamWriter<WebMessageResponse> ResponseStream { get; set; }
        private IHubContext<WebWindowHub> hub;

        public async void SendMessage(string message)
        {
            await hub.Clients.All.SendAsync("SendMessage", message);          
        }
        public IPC (IHubContext<WebWindowHub> hub){
            this.hub = hub;
        }

        public async void ReceiveMessage(string message)
        {
            await ResponseStream.WriteAsync(new WebMessageResponse { Response = "webmessage:" + message });
        }

        public async void LocationChanged(Point point)
        {
            await ResponseStream.WriteAsync(new WebMessageResponse { Response = "location:" + JsonConvert.SerializeObject(point) });
        }
        public async void SizeChanged(Size size)
        {
            await ResponseStream.WriteAsync(new WebMessageResponse { Response = "size:" + JsonConvert.SerializeObject(size) });
        }
    }
}
