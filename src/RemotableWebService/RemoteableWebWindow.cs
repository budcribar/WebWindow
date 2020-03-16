using System;
using Grpc.Net.Client;
using RemoteableWebWindowService;
using WebWindows;

namespace RemotableWebWindow
{
    public class RemotableWebWindow : IWebWindow
    {
        private Uri uri;
        private string windowTitle;
        private string hostHtmlPath;


        private string id = null;
        private string Id
        {
            get
            {
                if (id == null)
                    id = Guid.NewGuid().ToString();

                return id;
            }
        }
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

        public RemotableWebWindow(Uri uri, string windowTitle, string hostHtmlPath)
        {
            this.uri = uri;
        }

        public void Invoke(Action workItem)
        {
            workItem();
        }

        public void NavigateToUrl(string url)
        {
            Client.NavigateToUrl(new UrlMessageRequest {  Id=Id, Url = url });
        }

        public void SendMessage(string message)
        {
            Client.SendMessage(new SendMessageRequest { Id=Id, Message = message });
        }

        public void Show()
        {
            Client.Show(new IdMessageRequest { Id=Id });
        }

        public void ShowMessage(string title, string body)
        {
            Client.ShowMessage(new ShowMessageRequest { Id=Id, Body = body, Title = title });
        }

        public void WaitForExit()
        {
            Client.WaitForExit(new IdMessageRequest { Id = id });
        }
    }
}
