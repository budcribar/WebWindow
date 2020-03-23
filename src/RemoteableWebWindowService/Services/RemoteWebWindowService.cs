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

namespace PeakSwc.RemoteableWebWindows
{
    public class RemoteWebWindowService : RemoteWebWindow.RemoteWebWindowBase
    { 
        private readonly ILogger<RemoteWebWindowService> _logger;
        private readonly ConcurrentDictionary<Guid, WebWindow> _webWindowDictionary;
        private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> _fileDictionary;
        private readonly  BlockingCollection<(Guid, string)> _fileCollection;

        public RemoteWebWindowService(ILogger<RemoteWebWindowService> logger, ConcurrentDictionary<Guid, WebWindow> webWindowDictionary, ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream, ManualResetEventSlim)>> fileDictionary, BlockingCollection<(Guid, string)> fileCollection)
        {
            _logger = logger;
            _webWindowDictionary = webWindowDictionary;
            _fileDictionary = fileDictionary;
            _fileCollection = fileCollection;        
        }

        public Action<WebWindowOptions> HelloWorldOptions()
        {
            return (options) =>
            {
                options.SchemeHandlers.Add("app", (string url, out string contentType) =>
                    {
                        contentType = "text/javascript";
                        return new MemoryStream(Encoding.UTF8.GetBytes("alert('super')"));
                    });
            };
        }
        public Action<WebWindowOptions> RemoteOptions(Guid id, string hostHtmlPath)
        {
            return (options) => {
                var contentRootAbsolute = Path.GetDirectoryName(Path.GetFullPath(hostHtmlPath));

                options.SchemeHandlers.Add(ComponentsDesktop.BlazorAppScheme, (string url, out string contentType) =>
                {
                    // TODO: Only intercept for the hostname 'app' and passthrough for others
                    // TODO: Prevent directory traversal?
                    string appFile = "";
                    if (Path.Combine(contentRootAbsolute, new Uri(url).AbsolutePath.Substring(1)) == contentRootAbsolute)
                        appFile = hostHtmlPath;
                    else
                        appFile = Path.Combine(Path.GetDirectoryName(hostHtmlPath), new Uri(url.Replace("http", "file")).LocalPath.Substring(6));
                    
                    contentType = ComponentsDesktop.GetContentType(appFile);

                    return ProcessFile(id, appFile);
                });

                options.SchemeHandlers.Add("file", (string url, out string contentType) =>
                {
                    var appFile = new Uri(url).LocalPath;

                    contentType = ComponentsDesktop.GetContentType(appFile);

                    return ProcessFile(id, appFile);
                });

                // framework:// is resolved as embedded resources
                options.SchemeHandlers.Add("framework", (string url, out string contentType) =>
                {
                    contentType = ComponentsDesktop.GetContentType(url);
                    return ComponentsDesktop.SupplyFrameworkFile(url);
                });
            };
        }

        private Stream ProcessFile(Guid id, string appFile)
        {
            
            if (!_fileDictionary.ContainsKey(id))
                _fileDictionary.TryAdd(id, new ConcurrentDictionary<string, (MemoryStream, ManualResetEventSlim)>());

            _fileDictionary[id][appFile] = (null, new ManualResetEventSlim());
            _fileCollection.Add((id,appFile));

            _fileDictionary[id][appFile].Item2.Wait();
            return _fileDictionary[id][appFile].Item1;
        }

        private void Shutdown(Guid id)
        {
            _webWindowDictionary.Remove(id, out var ww);
            // TODO dispose ww
            _fileDictionary.Remove(id, out _);    
        }

        public override async Task CreateWebWindow(CreateWebWindowRequest request, IServerStreamWriter<WebMessageResponse> responseStream, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            if (!_webWindowDictionary.ContainsKey(id))
            {
                //var webWindow = new WebWindow(request.Title, RemoteOptions(request.HtmlHostPath));
                WebWindow webWindow = null;
               
                //Program.form.Invoke((Action)(() => { webWindow = new WebWindow(request.Title, ComponentsDesktop.StandardOptions(request.HtmlHostPath)); }));
                Program.form.Invoke((Action)(() => { webWindow = new WebWindow(request.Title, RemoteOptions(id,request.HtmlHostPath)); }));

                webWindow.OnWebMessageReceived += async(sender, message) =>
                {
                    //if (!context.CancellationToken.IsCancellationRequested)  //TODO cancellationtoken is null
                    //lock (responseStream)
                        await responseStream.WriteAsync(new WebMessageResponse { Response = message });
                };

                _webWindowDictionary.TryAdd(id, webWindow);

                await responseStream.WriteAsync(new WebMessageResponse { Response = "Web Window has been created" });

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
                    if ( _fileCollection.TryTake(out (Guid id,string file) t))
                    {
                        if (_fileDictionary.ContainsKey(t.id))
                            await responseStream.WriteAsync(new FileReadResponse { Id=t.id.ToString(), Path = t.file });
                    }
                }
                       
            });
            await foreach (var message in requestStream.ReadAllAsync())
            {
                Guid id = new Guid(message.Id);

                _fileDictionary[id][message.Path] = (new MemoryStream(message.Data.ToArray()), _fileDictionary[id][message.Path].mres);
                _fileDictionary[id][message.Path].mres.Set();
            }
        }
        public override Task<Empty> WaitForExit(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            _webWindowDictionary[id].WaitForExit();

            Shutdown(id);
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

        public override Task<Empty> NavigateToLocalFile(FileMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].NavigateToLocalFile(request.Path);
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<IntMessageResponse> GetHeight(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            
            return Task.FromResult(new IntMessageResponse { Response = _webWindowDictionary[id].Height });       
        }

        public override Task<IntMessageResponse> GetLeft(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            return Task.FromResult(new IntMessageResponse { Response = _webWindowDictionary[id].Left });
        }

        public override Task<PointMessageResponse> GetLocation(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            Point l = _webWindowDictionary[id].Location;
            return Task.FromResult(new PointMessageResponse { X=l.X, Y=l.Y  });
        }

        public override Task<MonitorResponse> GetMonitors(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            var monitors = _webWindowDictionary[id].Monitors;
            var response = new MonitorResponse();
            foreach (var m in monitors)
                response.Instances.Add(new MonitorResponse.Types.Instance { MonitorArea = new RectangleResponse { Height=m.MonitorArea.Height, Width=m.MonitorArea.Width, X=m.MonitorArea.X, Y=m.MonitorArea.Y }, WorkArea = new RectangleResponse { Height = m.WorkArea.Height, Width = m.WorkArea.Width, X = m.WorkArea.X, Y = m.WorkArea.Y } });

            return Task.FromResult(response);
        }

        public override Task<BoolResponse> GetResizable(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            return Task.FromResult(new BoolResponse {  Response = _webWindowDictionary[id].Resizable });
        }

        public override Task<UInt32Response> GetScreenDpi(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            return Task.FromResult(new UInt32Response {  Response = _webWindowDictionary[id].ScreenDpi });       
        }

        public override Task<SizeMessageResponse> GetSize(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            Size s = _webWindowDictionary[id].Size;
            return Task.FromResult(new SizeMessageResponse {  Height=s.Height, Width=s.Width });
        }

        public override Task<StringResponse> GetTitle(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            return Task.FromResult(new StringResponse { Response = _webWindowDictionary[id].Title });
        }

        public override Task<IntMessageResponse> GetTop(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            return Task.FromResult(new IntMessageResponse { Response = _webWindowDictionary[id].Top });
        }

        public override Task<BoolResponse> GetTopmost(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            return Task.FromResult(new BoolResponse { Response = _webWindowDictionary[id].Topmost });
        }

        public override Task<IntMessageResponse> GetWidth(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            return Task.FromResult(new IntMessageResponse { Response = _webWindowDictionary[id].Width });
        }
        public override Task<Empty> NavigateToString(StringRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].NavigateToString(request.Request);
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> SetHeight(IntMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Height = request.Message;
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> SetIconFile(SendMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].SetIconFile(request.Message);
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> SetLeft(IntMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Left = request.Message;
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetLocation(PointMessageRequest request, ServerCallContext context)
        {        
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Location = new Point(request.X, request.Y);
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetResizable(BoolRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Resizable = request.Request;
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetSize(SizeMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Size = new Size(request.Width, request.Height);
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetTitle(StringRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Title = request.Request;
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetTop(IntMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Top = request.Message;
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetTopmost(BoolRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Topmost = request.Request;
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetWidth(IntMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            _webWindowDictionary[id].Width = request.Message;
            return Task.FromResult<Empty>(new Empty());
        }
    }
}
