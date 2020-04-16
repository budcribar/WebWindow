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
using Newtonsoft.Json;

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
                                var command = message.Response.Split(':')[0];
                                var data = message.Response.Substring(message.Response.IndexOf(':')+1);

                                switch (command)
                                {
                                    case "created": 
                                        completed.Set();
                                        break;
                                    case "webmessage":
                                        OnWebMessageReceived?.Invoke(null, data);
                                        break;
                                    case "location":
                                        LocationChanged?.Invoke(null, JsonConvert.DeserializeObject<Point>( data));
                                        break;
                                    case "size":
                                        SizeChanged?.Invoke(null, JsonConvert.DeserializeObject<Size>(data));
                                        break;
                                }
                                                               
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

        public int Height { get => Client.GetHeight(new IdMessageRequest { Id = Id }).Response; set => Client.SetHeight(new IntMessageRequest {  Id=Id, Message = value }); }
        public int Left { get => Client.GetLeft(new IdMessageRequest { Id = Id }).Response; set => Client.SetLeft(new IntMessageRequest { Id=Id, Message = value }); }
        public Point Location { get { var l = Client.GetLocation(new IdMessageRequest { Id = Id }); return new Point(l.X, l.Y); } set => Client.SetLocation(new PointMessageRequest { Id=Id, X=value.X, Y=value.Y }); }


        public IReadOnlyList<WebWindows.Monitor> Monitors
        {
            get
            {
                List<WebWindows.Monitor> results = new List<WebWindows.Monitor>();
                var monitors = Client.GetMonitors(new IdMessageRequest { Id = Id });
                foreach (var m in monitors.Instances)
                    results.Add(new WebWindows.Monitor(new Rectangle { X = m.MonitorArea.X, Y = m.MonitorArea.Y, Width = m.MonitorArea.Width, Height = m.MonitorArea.Height }, new Rectangle { X = m.WorkArea.X, Y = m.WorkArea.Y, Width = m.WorkArea.Width, Height = m.WorkArea.Height }));
                return results;
            }
        }

        public bool Resizable { get => Client.GetResizable(new IdMessageRequest { Id = Id }).Response; 
            set => Client.SetResizable(new BoolRequest { Id = Id, Request = value }); }

        public uint ScreenDpi { get => Client.GetScreenDpi(new IdMessageRequest { Id = Id }).Response; }

        public Size Size { get { var l = Client.GetSize(new IdMessageRequest { Id = Id }); return new Size(l.Width, l.Height); } set => Client.SetSize(new SizeMessageRequest { Id = Id, Width = value.Width, Height = value.Height }); }

        public string Title { get => Client.GetTitle(new IdMessageRequest { Id = Id }).Response; set => Client.SetTitle(new StringRequest { Id = Id, Request = value }); }

        public int Top { get => Client.GetTop(new IdMessageRequest { Id = Id }).Response; set => Client.SetTop(new IntMessageRequest { Id = Id, Message = value }); } 
       

        public bool Topmost { get => Client.GetTopmost(new IdMessageRequest { Id = Id }).Response; 
            set => Client.SetTopmost(new BoolRequest { Id = Id, Request = value }); }


        public int Width { get => Client.GetWidth(new IdMessageRequest { Id = Id }).Response; set => Client.SetWidth(new IntMessageRequest { Id = Id, Message = value }); }
      
        public event EventHandler<string> OnWebMessageReceived;
        public event EventHandler<Point> LocationChanged;
        public event EventHandler<Size> SizeChanged;

        public RemotableWebWindow(Uri uri, string windowTitle, string hostHtmlPath)
        {
            this.uri = uri;
            this.windowTitle = windowTitle;
            this.hostHtmlPath = hostHtmlPath;
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

        // TODO
        public void SetIconFile(string filename)
        {
            Client.SetIconFile(new SendMessageRequest { Id = Id, Message = filename });
        }

        public void NavigateToString(string content)
        {
            Client.NavigateToString(new StringRequest { Id = Id, Request = content });
        }
    }
}
