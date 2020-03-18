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

namespace RemoteableWebWindowService
{
    public class RemoteWebWindowService : RemoteWebWindow.RemoteWebWindowBase
    {
        private readonly ILogger<RemoteWebWindowService> _logger;
        private readonly ConcurrentDictionary<Guid, WebWindow> _webWindowDictionary;
        private readonly ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)> _fileDictionary = new ConcurrentDictionary<string, (MemoryStream,ManualResetEventSlim)>();
        private BlockingCollection<string> _fileCollection = new BlockingCollection<string>();

        public RemoteWebWindowService(ILogger<RemoteWebWindowService> logger, ConcurrentDictionary<Guid, WebWindow> webWindowDictionary)
        {
            _logger = logger;
            _webWindowDictionary = webWindowDictionary;
        }

        public Action<WebWindowOptions> RemoteOptions(string hostHtmlPath)
        {
            return (options) => {
                var contentRootAbsolute = Path.GetDirectoryName(Path.GetFullPath(hostHtmlPath));

                options.SchemeHandlers.Add(ComponentsDesktop.BlazorAppScheme, (string url, out string contentType) =>
                {
                    // TODO: Only intercept for the hostname 'app' and passthrough for others
                    // TODO: Prevent directory traversal?
                    var appFile = Path.Combine(contentRootAbsolute, new Uri(url).AbsolutePath.Substring(1));
                    if (appFile == contentRootAbsolute)
                    {
                        appFile = hostHtmlPath;
                    }

                    contentType = ComponentsDesktop.GetContentType(appFile);

                    if (_fileDictionary.ContainsKey(appFile)) return null; // TODO
                    _fileDictionary[appFile] = (null, new ManualResetEventSlim());
                    _fileCollection.Add(appFile);
                    _fileDictionary[appFile].mres.Wait();
                    return _fileDictionary[appFile].stream;
                });

                // framework:// is resolved as embedded resources
                options.SchemeHandlers.Add("framework", (string url, out string contentType) =>
                {
                    contentType = ComponentsDesktop.GetContentType(url);
                    return ComponentsDesktop.SupplyFrameworkFile(url);
                });
            };
        }

        public override async Task CreateWebWindow(CreateWebWindowRequest request, IServerStreamWriter<WebMessageResponse> responseStream, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            if (!_webWindowDictionary.ContainsKey(id))
            {
                //var webWindow = new WebWindow(request.Title, RemoteOptions(request.HtmlHostPath));
                var webWindow = new WebWindow(request.Title, ComponentsDesktop.StandardOptions(request.HtmlHostPath));
                _webWindowDictionary.TryAdd(id, webWindow);
                await responseStream.WriteAsync(new WebMessageResponse { Message = "Web Window has been created" });

                webWindow.OnWebMessageReceived += (sender, message) =>
                {
                    //if (!context.CancellationToken.IsCancellationRequested)  //TODO cancellationtoken is null
                    lock (responseStream)
                        responseStream.WriteAsync(new WebMessageResponse { Message = message });
                };
                while (!context.CancellationToken.IsCancellationRequested)
                {
                    await Task.Delay(1000);

                }
            }
        }


        public override async Task FileReader(IAsyncStreamReader<FileReadRequest> requestStream, IServerStreamWriter<FileReadResponse> responseStream, ServerCallContext context)
        {
            var task = Task.Run(async () => {
                while (true)
                {
                    string file = _fileCollection.Take();
                    await responseStream.WriteAsync(new FileReadResponse { Path = file });
                }
                       
            });
            await foreach (var message in requestStream.ReadAllAsync())
            {
                var tuple = _fileDictionary[message.Path];
                tuple.stream = new MemoryStream(message.Data.ToArray());
                tuple.mres.Set();
            }
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
