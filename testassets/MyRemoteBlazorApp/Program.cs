using WebWindows.Blazor;
using System;
using RemotableWebWindow;

namespace MyRemoteBlazorApp
{
    public class Program
    {
        static void Main(string[] args)
        { 
            ComponentsDesktop.Run<Startup>(new RemotableWebWindow.RemotableWebWindow(new Uri("https://localhost:5001"), "My Remote Blazor App", "wwwroot/index.html"));
        }
    }
}
