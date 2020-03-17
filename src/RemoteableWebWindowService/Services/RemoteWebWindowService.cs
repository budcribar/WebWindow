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

namespace RemoteableWebWindowService
{
    public class RemoteWebWindowService : RemoteWebWindow.RemoteWebWindowBase
    {
        private readonly ILogger<RemoteWebWindowService> _logger;
        private readonly ConcurrentDictionary<Guid, WebWindow> _webWindowDictionary;

        public RemoteWebWindowService(ILogger<RemoteWebWindowService> logger, ConcurrentDictionary<Guid, WebWindow> webWindowDictionary)
        {
            _logger = logger;
            _webWindowDictionary = webWindowDictionary;
        }

        public override async Task CreateWebWindow(CreateWebWindowRequest request, IServerStreamWriter<WebMessageResponse> responseStream, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            if (!_webWindowDictionary.ContainsKey(id))
            {
                var webWindow = new WebWindow(request.Title, ComponentsDesktop.StandardOptions(request.HtmlHostPath));
                _webWindowDictionary.TryAdd(id, webWindow);
                await responseStream.WriteAsync(new WebMessageResponse { Message = "Web Window has been created" });

                webWindow.OnWebMessageReceived += (sender, message) =>
                {
                    // if (!context.CancellationToken.IsCancellationRequested)  //TODO cancellationtoken is null
                    responseStream.WriteAsync(new WebMessageResponse { Message = message });
                };
                while (!context.CancellationToken.IsCancellationRequested)
                {
                    await Task.Delay(1000);

                }
            }

            //return Task.FromResult<Empty>(new Empty());
        }

        private void WebWindowOnWebMessageReceived(object sender, string e)
        {
            throw new NotImplementedException();
        }

        public override Task<Empty> WaitForExit(IdMessageRequest request, ServerCallContext context) {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].WaitForExit();
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> Show(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Show();
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> ShowMessage(ShowMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].ShowMessage(request.Title, request.Body);
            return Task.FromResult<Empty>(new Empty());
        }

        
        public override Task<Empty> NavigateToUrl(UrlMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].NavigateToUrl(request.Url);
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> SendMessage(SendMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].SendMessage(request.Message);
            return Task.FromResult<Empty>(new Empty());
        }

    }
}
