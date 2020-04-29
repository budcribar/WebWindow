using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Google.Protobuf.WellKnownTypes;
using Microsoft.Extensions.Logging;
using System.Collections.Concurrent;
using WebWindows;
using System.IO;
using WebWindows.Blazor;
using System.Threading;
using System.Text;
using System.Drawing;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Components;
using RemoteableWebWindowService;

namespace PeakSwc.RemoteableWebWindows
{
    public class BrowserIPCService : BrowserIPC.BrowserIPCBase
    {
        private readonly ILogger<RemoteWebWindowService> _logger;
        private IPC _ipc;
       

        public BrowserIPCService(ILogger<RemoteWebWindowService> logger, IPC ipc)
        {
            _logger = logger;
            
            _ipc = ipc;
        }

        

        public override Task ReceiveMessage(EmptyRequest request, IServerStreamWriter<StringRequest> responseStream, ServerCallContext context)
        {
            _ipc.BrowserResponseStream = responseStream;

            while (true)
                Thread.Sleep(1000);

            return Task.CompletedTask;
        }

        public override Task<EmptyRequest> SendMessage(StringRequest request, ServerCallContext context)
        {
            _ipc.ReceiveMessage(request.Request);
            return Task.FromResult<EmptyRequest>(new EmptyRequest());
        }


    }
}