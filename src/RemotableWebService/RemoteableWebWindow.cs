using System;
using Grpc.Net.Client;
using RemoteableWebWindowService;
using WebWindows;

namespace RemotableWebWindow
{
    public class RemotableWebWindow : IWebWindow
    {
        private Uri uri;
        private RemoteWebWindow.RemoteWebWindowClient client = null;

        private RemoteWebWindow.RemoteWebWindowClient Client {
            get {

                if (client ==null)
                {
                    using var channel = GrpcChannel.ForAddress(uri);

                    client = new RemoteWebWindow.RemoteWebWindowClient(channel);
                }
                return client;
            }
        }

        public event EventHandler<string> OnWebMessageReceived;

        public RemotableWebWindow(Uri uri)
        {
            this.uri = uri;
        }

        public void Invoke(Action workItem)
        {
            workItem();
        }

        public void NavigateToUrl(string url)
        {
            Client.NavigateToUrl(new UrlMessageRequest { Url = url });
        }

        public void SendMessage(string message)
        {
            Client.SendMessage(new SendMessageRequest { Message = message });
        }

        public void Show()
        {
            Client.Show(new Google.Protobuf.WellKnownTypes.Empty());
        }

        public void ShowMessage(string title, string body)
        {
            Client.ShowMessage(new ShowMessageRequest { Body = body, Title = title });
        }

        public void WaitForExit()
        {
            Client.WaitForExit(new Google.Protobuf.WellKnownTypes.Empty());
        }
    }
}
