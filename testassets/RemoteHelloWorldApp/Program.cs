﻿using System;
using System.IO;
using System.Text;
using WebWindows;
using PeakSwc.RemoteableWebWindows;

namespace RemoteHelloWorldApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var window = new RemotableWebWindow(new Uri("https://localhost:5001"), "My Remote Blazor App", "wwwroot/index.html");
         
            window.OnWebMessageReceived += (sender, message) =>
            {
                window.SendMessage("Got message: " + message);
            };

            //window.ShowMessage("title", "Hello from RemoteHelloWorldApp");

            window.NavigateToLocalFile("wwwroot/index.html");
            window.WaitForExit();
        }
    }
}
