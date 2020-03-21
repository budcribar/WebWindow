using System;
using System.Collections.Generic;
using System.Text;

namespace WebWindows
{
    public interface IWebWindow
    {    
        void SendMessage(string message);
        void Show();
        void ShowMessage(string title, string body);
        void NavigateToLocalFile(string path);
        void NavigateToUrl(string url);
        void WaitForExit();
        event EventHandler<string> OnWebMessageReceived;
    }
}
