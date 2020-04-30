using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;

namespace WebWindows
{
    public interface IWebWindow
    {
        int Height { get; set; }
        int Left { get; set; }
        Point Location { get; set; }
        IReadOnlyList<Monitor> Monitors { get; }
        bool Resizable { get; set; }
        uint ScreenDpi { get; }
        void SendMessage(string message);
        void SetIconFile(string filename);
        void Show();
        void ShowMessage(string title, string body);     
        Size Size { get; set; }
        public string Title { get; set; }
        int Top { get; set; }
        bool Topmost { get; set; }
        void NavigateToLocalFile(string path);
        void NavigateToString(string content);
        void NavigateToUrl(string url);
        void WaitForExit();
        int Width { get; set; }
        IJSRuntime JSRuntime { get; set; }
        event EventHandler<Point> LocationChanged;
        event EventHandler<string> OnWebMessageReceived;
        event EventHandler<Size> SizeChanged;
    }
}
