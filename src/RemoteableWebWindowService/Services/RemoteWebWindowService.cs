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
        private ConcurrentDictionary<Guid,IPC> _ipc;

        // TODO get rid of this
        private readonly IJSRuntime _jsRuntime;

        public RemoteWebWindowService(IJSRuntime jsRuntime, ILogger<RemoteWebWindowService> logger, ConcurrentDictionary<Guid, string> rootDictionary, ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream, ManualResetEventSlim)>> fileDictionary, ConcurrentDictionary<Guid, BlockingCollection<(Guid, string)>> fileCollection, ConcurrentDictionary<Guid,IPC> ipc)
        {
            _logger = logger;
            _webWindowDictionary = rootDictionary;
            _fileDictionary = fileDictionary;
            _fileCollection = fileCollection;
            _ipc = ipc;
            _jsRuntime = jsRuntime;
        }

        public ConcurrentDictionary<Guid,IPC> IPC { set { _ipc = value; } }
       
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

                if (!_ipc.ContainsKey(id)) _ipc.TryAdd(id,new IPC());
                _ipc[id].ResponseStream = responseStream;
               
                _webWindowDictionary.TryAdd(id, request.HtmlHostPath);


                while (!context.CancellationToken.IsCancellationRequested)
                {
                    await Task.Delay(1000);

                }
            }
            else _ipc[id].ResponseStream = responseStream;
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

            _ipc[id].SendMessage(request.Message);
            return Task.FromResult<Empty>(new Empty());
        }

        public override Task<Empty> NavigateToLocalFile(FileMessageRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            //_webWindowDictionary[id].NavigateToLocalFile(request.Path);
            return Task.FromResult<Empty>(new Empty());
        }
       
        public override Task<Empty> NavigateToString(StringRequest request, ServerCallContext context)
        {
            Guid id = Guid.Parse(request.Id);
            // TODO _webWindowDictionary[id].NavigateToString(request.Request);
            return Task.FromResult<Empty>(new Empty());
        }

       
    }
}
