using WebWindows.Blazor;
using System;
using PeakSwc.RemoteableWebWindows;

namespace MyRemoteBlazorApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            ComponentsDesktop.Run<Startup>(new RemotableWebWindow(new Uri("https://localhost:5001"), "My Remote Blazor App", "wwwroot/index.html"));
            //ComponentsDesktop.Run<Startup>(new RemotableWebWindow(new Uri("https://localhost:443"), "My Remote Blazor App", "wwwroot/index.html"));
            //ComponentsDesktop.Run<Startup>(new RemotableWebWindow(new Uri("https://13.64.108.0:443"), "My Remote Blazor App", "wwwroot/index.html"));
            //ComponentsDesktop.Run<Startup>("My Blazor App", "wwwroot/index.html");
        }
    }
}
