using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace RemoteableWebWindowService
{
    public class WebWindowHub : Hub
    {
        IPC _ipc;

        public WebWindowHub(IPC ipc) { _ipc = ipc; }

        public async Task ReceiveMessage(string userId, string message)
        {
            
        }
        public async Task SendMessage(string userId, string message)
        {
            _ipc.ReceiveMessage(message);
        }
    }
}
