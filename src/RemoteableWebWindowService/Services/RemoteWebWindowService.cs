using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Google.Protobuf.WellKnownTypes;
using Microsoft.Extensions.Logging;
using System.Collections.Concurrent;
using System.IO;
using System.Threading;
using System.Text;
using System.Drawing;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Components;
using RemoteableWebWindowService;
using Microsoft.JSInterop;

namespace PeakSwc.RemoteableWebWindows
{
    public class RemoteWebWindowService : RemoteWebWindow.RemoteWebWindowBase
    { 
        private readonly ILogger<RemoteWebWindowService> _logger;
        private readonly ConcurrentDictionary<Guid, string> _webWindowDictionary;
        private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> _fileDictionary;
        private readonly ConcurrentDictionary<Guid, BlockingCollection<(Guid id, string file)>> _fileCollection;
        private readonly bool blazor = true;
        private  IPC _ipc;

        // TODO get rid of this
        private readonly IJSRuntime _jsRuntime;

        public RemoteWebWindowService(IJSRuntime jsRuntime, ILogger<RemoteWebWindowService> logger, ConcurrentDictionary<Guid, string> rootDictionary, ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream, ManualResetEventSlim)>> fileDictionary, ConcurrentDictionary<Guid, BlockingCollection<(Guid, string)>> fileCollection, IPC ipc)
        {
            _logger = logger;
            _webWindowDictionary = rootDictionary;
            _fileDictionary = fileDictionary;
            _fileCollection = fileCollection;
            _ipc = ipc;
            _jsRuntime = jsRuntime;
        }

        public IPC IPC { set { _ipc = value; } }
       
        private Stream ProcessFile(Guid id, string appFile)
        {
            
            if (!_fileDictionary.ContainsKey(id))
                _fileDictionary.TryAdd(id, new ConcurrentDictionary<string, (MemoryStream, ManualResetEventSlim)>());

            _fileDictionary[id][appFile] = (null, new ManualResetEventSlim());
            _fileCollection[id].Add((id,appFile));

            _fileDictionary[id][appFile].mres.Wait();
            return _fileDictionary[id][appFile].stream;
        }

        private void Shutdown(Guid id)
        {
            _webWindowDictionary.Remove(id, out var _);
            // TODO dispose ww
            _fileDictionary.Remove(id, out _);    
        }

        public override async Task CreateWebWindow(CreateWebWindowRequest request, IServerStreamWriter<WebMessageResponse> responseStream, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            if (!_webWindowDictionary.ContainsKey(id))
            {

                await responseStream.WriteAsync(new WebMessageResponse { Response = "created:" });

                _ipc.ResponseStream = responseStream;
               
                _webWindowDictionary.TryAdd(id, request.HtmlHostPath);


                while (!context.CancellationToken.IsCancellationRequested)
                {
                    await Task.Delay(1000);

                }
            }
            else _ipc.ResponseStream = responseStream;
        }


        public override async Task FileReader(IAsyncStreamReader<FileReadRequest> requestStream, IServerStreamWriter<FileReadResponse> responseStream, ServerCallContext context)
        {


            await foreach (var message in requestStream.ReadAllAsync())
            {
                Guid id = new Guid(message.Id);
                if (!_fileCollection.ContainsKey(id))
                    _fileCollection.TryAdd(id, new BlockingCollection<(Guid id, string file)>());

                if (message.Path == "Initialize")
                {
                    var task2 = Task.Run(async () =>
                    {
                        while (true)
                        {
                            var (idx, file) = _fileCollection[id].Take();
                            {
                                if (_fileDictionary.ContainsKey(id))
                                    await responseStream.WriteAsync(new FileReadResponse { Id = id.ToString(), Path = file });
                            }
                        }

                    });

                }
                else
                { 
                    _fileDictionary[id][message.Path] = (new MemoryStream(message.Data.ToArray()), _fileDictionary[id][message.Path].mres);
                    _fileDictionary[id][message.Path].mres.Set();
                }
            }
        }
        public override Task<Empty> WaitForExit(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            // TODO
            Thread.Sleep(TimeSpan.FromHours(24));

            Shutdown(id);
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> Show(IdMessageRequest request, ServerCallContext context)
        {
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> ShowMessage(ShowMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            //_webWindowDictionary[id].ShowMessage(request.Title, request.Body);
            return Task.FromResult<Empty>(new Empty());
        }

        
        public override Task<Empty> NavigateToUrl(UrlMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            //if (!blazor)
            //    _webWindowDictionary[id].NavigateToUrl(request.Url);
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> SendMessage(SendMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);

            _ipc.SendMessage(request.Message);
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> NavigateToLocalFile(FileMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            //_webWindowDictionary[id].NavigateToLocalFile(request.Path);
            return Task.FromResult<Empty>(new Empty());
        }

        public async override Task<IntMessageResponse> GetHeight(IdMessageRequest request, ServerCallContext context)
        {
            return new IntMessageResponse { Response = await _jsRuntime.InvokeAsync<int>("RemoteWebWindow.height") };
        }

        public async override Task<IntMessageResponse> GetLeft(IdMessageRequest request, ServerCallContext context)
        {
            return new IntMessageResponse { Response = await _jsRuntime.InvokeAsync<int>("RemoteWebWindow.left") };
        }

        public async override Task<PointMessageResponse> GetLocation(IdMessageRequest request, ServerCallContext context)
        {
            Point p = await _jsRuntime.InvokeAsync<Point>("RemoteWebWindow.location");
           
            return new PointMessageResponse { X=p.X, Y=p.Y  };
        }

        //public override Task<MonitorResponse> GetMonitors(IdMessageRequest request, ServerCallContext context)
        //{
        //    Guid id = Guid.Parse(request.Id);
        //    var monitors = _webWindowDictionary[id].Monitors;
        //    var response = new MonitorResponse();
        //    foreach (var m in monitors)
        //        response.Instances.Add(new MonitorResponse.Types.Instance { MonitorArea = new RectangleResponse { Height=m.MonitorArea.Height, Width=m.MonitorArea.Width, X=m.MonitorArea.X, Y=m.MonitorArea.Y }, WorkArea = new RectangleResponse { Height = m.WorkArea.Height, Width = m.WorkArea.Width, X = m.WorkArea.X, Y = m.WorkArea.Y } });

        //    return Task.FromResult(response);
        //}

        //public override Task<BoolResponse> GetResizable(IdMessageRequest request, ServerCallContext context)
        //{
        //    Guid id = Guid.Parse(request.Id);

        //    return Task.FromResult(new BoolResponse {  Response = _webWindowDictionary[id].Resizable });
        //}

        //public override Task<UInt32Response> GetScreenDpi(IdMessageRequest request, ServerCallContext context)
        //{
        //    Guid id = Guid.Parse(request.Id);

        //    return Task.FromResult(new UInt32Response {  Response = _webWindowDictionary[id].ScreenDpi });       
        //}

        public async override Task<SizeMessageResponse> GetSize(IdMessageRequest request, ServerCallContext context)
        {
            Size s = await _jsRuntime.InvokeAsync<Size>("RemoteWebWindow.size");
            return new SizeMessageResponse {  Height=s.Height, Width=s.Width };
        }

        public override Task<StringResponse> GetTitle(IdMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            var title = "";
            // TODO
            return Task.FromResult(new StringResponse { Response = title });
        }

        public async override Task<IntMessageResponse> GetTop(IdMessageRequest request, ServerCallContext context)
        {
            return new IntMessageResponse { Response = await _jsRuntime.InvokeAsync<int>("RemoteWebWindow.top") };
        }

        public async override Task<IntMessageResponse> GetWidth(IdMessageRequest request, ServerCallContext context)
        {
            return new IntMessageResponse { Response = await _jsRuntime.InvokeAsync<int>("RemoteWebWindow.width") };
        }

        public override Task<Empty> NavigateToString(StringRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            // TODO _webWindowDictionary[id].NavigateToString(request.Request);
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> SetHeight(IntMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            // TODO  _webWindowDictionary[id].Height = request.Message;
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> SetIconFile(SendMessageRequest request, ServerCallContext context)
        {
            return Task.FromResult<Empty>(new Empty());
        }

        public async override Task<Empty> SetLeft(IntMessageRequest request, ServerCallContext context)
        {
            await _jsRuntime.InvokeAsync<int>("RemoteWebWindow.setLeft", new object[] { request.Id, request.Message });
            return new Empty();
        }
        public override Task<Empty> SetLocation(PointMessageRequest request, ServerCallContext context)
        {        
            Guid id = Guid.Parse(request.Id);
            // TODO _webWindowDictionary[id].Location = new Point(request.X, request.Y);
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetResizable(BoolRequest request, ServerCallContext context)
        {
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetSize(SizeMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            // TODO_webWindowDictionary[id].Size = new Size(request.Width, request.Height);
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetTitle(StringRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            // TODO _webWindowDictionary[id].Title = request.Request;
            return Task.FromResult<Empty>(new Empty());
        }
        public override Task<Empty> SetTop(IntMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            // TODO _webWindowDictionary[id].Top = request.Message;
            return Task.FromResult<Empty>(new Empty());
        }
       
        public override Task<Empty> SetWidth(IntMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            // TODO _webWindowDictionary[id].Width = request.Message;
            return Task.FromResult<Empty>(new Empty());
        }
    }
}
