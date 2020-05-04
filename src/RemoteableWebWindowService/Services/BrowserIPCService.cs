using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using System.Threading;
using RemoteableWebWindowService;

namespace PeakSwc.RemoteableWebWindows
{
    public class BrowserIPCService : BrowserIPC.BrowserIPCBase
    {
        private readonly ILogger<RemoteWebWindowService> _logger;
        public IPC IPC { get; set; }
        private volatile bool shutdown = false;

        public BrowserIPCService(ILogger<RemoteWebWindowService> logger, IPC ipc)
        {
            _logger = logger;
            
            IPC = ipc;
        }

        public void Shutdown()
        {
            shutdown = true;
        }

        public override Task ReceiveMessage(EmptyRequest request, IServerStreamWriter<StringRequest> responseStream, ServerCallContext context)
        {
            IPC.BrowserResponseStream = responseStream;

            while (!shutdown)
                Thread.Sleep(1000);

            return Task.CompletedTask;
        }

        public override Task<EmptyRequest> SendMessage(StringRequest request, ServerCallContext context)
        {
            IPC.ReceiveMessage(request.Request);
            return Task.FromResult<EmptyRequest>(new EmptyRequest());
        }


    }
}
