﻿using Grpc.Core;
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
        public IServerStreamWriter<StringRequest> BrowserResponseStream { get; set; }

        public async void SendMessage(string message)
        {
            await BrowserResponseStream.WriteAsync (new StringRequest {  Request = message });          
        }
        public IPC (){
           
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
