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

        public Task<Empty> CreateWebWindow(CreateWebWindowRequest request)
        {
            Guid id = Guid.Parse(request.Id);
            if (!_webWindowDictionary.ContainsKey(id))
            {
                var webWindow = new WebWindow(request.Title, ComponentsDesktop.StandardOptions(request.HtmlHostPath));
                _webWindowDictionary.TryAdd(id, webWindow);
            }

            return Task.FromResult<Empty>(new Empty());
        }

        public Task<Empty> WaitForExit(IdMessageRequest request) {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].WaitForExit();
            return Task.FromResult<Empty>(new Empty());
        }

        public Task<Empty> Show(IdMessageRequest request)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Show();
            return Task.FromResult<Empty>(new Empty());
        }

        public Task<Empty> ShowMessage(ShowMessageRequest request)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].ShowMessage(request.Title, request.Body);
            return Task.FromResult<Empty>(new Empty());
        }

        
        public Task<Empty> NavigateToUrl(UrlMessageRequest request)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].NavigateToUrl(request.Url);
            return Task.FromResult<Empty>(new Empty());
        }

        public Task<Empty> SendMessage(SendMessageRequest request)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].SendMessage(request.Message);
            return Task.FromResult<Empty>(new Empty());
        }

    }
}
