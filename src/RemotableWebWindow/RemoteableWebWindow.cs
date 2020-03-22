using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Net.Client;
using WebWindows;
using Google.Protobuf;
using System.Drawing;
using System.Collections.Generic;

namespace PeakSwc.RemoteableWebWindows
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
        private CancellationTokenSource cts = new CancellationTokenSource();
        public RemoteWebWindow.RemoteWebWindowClient Client {
            get
            {
                if (client == null)
                {
                    var channel = GrpcChannel.ForAddress(uri);

                    client = new RemoteWebWindow.RemoteWebWindowClient(channel);
                    var events = client.CreateWebWindow(new CreateWebWindowRequest { Id = Id, HtmlHostPath = hostHtmlPath, Title = windowTitle }, cancellationToken: cts.Token); // TODO parameter names
                    var completed = new ManualResetEventSlim();
                    var first = true;
                    Task.Run(async () =>
                    {
                        try
                        {
                            await foreach (var message in events.ResponseStream.ReadAllAsync())
                            {
                                if (first)
                                {
                                    first = false;
                                    completed.Set();
                                }
                                else
                                    OnWebMessageReceived?.Invoke(null, message.Message);
                            }
                        }
                        catch (RpcException ex) when (ex.StatusCode == StatusCode.Cancelled)
                        {

                            Console.WriteLine("Stream cancelled.");  //TODO
                        }
                    }, cts.Token);

                    Task.Run(async () =>
                    {
                        var files = client.FileReader();
                        await foreach (var message in files.ResponseStream.ReadAllAsync())
                        {
                            if (File.Exists(message.Path))
                            {
                                var bytes = File.ReadAllBytes(message.Path);
                                await files.RequestStream.WriteAsync(new FileReadRequest { Id = Id, Path = message.Path, Data = ByteString.CopyFrom(bytes) });
                            }
                            else await files.RequestStream.WriteAsync(new FileReadRequest { Id = Id, Path = message.Path });

                        }

                    },cts.Token);

                    completed.Wait();

                }
                return client;
            }
        }

        public int Height { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public int Left { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public Point Location { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public IReadOnlyList<WebWindows.Monitor> Monitors => throw new NotImplementedException();

        public bool Resizable { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public uint ScreenDpi => throw new NotImplementedException();

        public Size Size { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string Title { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public int Top { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public bool Topmost { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public int Width { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public event EventHandler<string> OnWebMessageReceived;
        public event EventHandler<Point> LocationChanged;
        public event EventHandler<Size> SizeChanged;

        public RemotableWebWindow(Uri uri, string windowTitle, string hostHtmlPath)
        {
            this.uri = uri;
            this.windowTitle = windowTitle;
            this.hostHtmlPath = hostHtmlPath;
            //var c = this.Client; // TODO
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
            cts.Cancel();
        }

        public void NavigateToLocalFile(string path)
        {
            var absolutePath = Path.GetFullPath(path);
            var url = new Uri(absolutePath, UriKind.Absolute);
            Client.NavigateToUrl(new UrlMessageRequest { Id = Id, Url = url.ToString() });
           
        }

        public void SetIconFile(string filename)
        {
            throw new NotImplementedException();
        }

        public void NavigateToString(string content)
        {
            throw new NotImplementedException();
        }
    }
}
