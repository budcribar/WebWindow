﻿using WebWindows.Blazor;
using System;

namespace MyRemoteBlazorApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            ComponentsDesktop.Run<Startup>("My Blazor App", "wwwroot/index.html");
        }
    }
}
