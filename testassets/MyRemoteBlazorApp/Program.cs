using WebWindows.Blazor;
using System;
using RemotableWebWindow;

namespace MyRemoteBlazorApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            var window = new RemotableWebWindow.RemotableWebWindow(new Uri("https://localhost:5001"), "My Remote Blazor App", "wwwroot/index.html");
            var c = window.Client; // TODO initialized
            ComponentsDesktop.Run<Startup>(window); // TODO bad namespace name
        }
    }
}
