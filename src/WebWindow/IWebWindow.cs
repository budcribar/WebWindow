using System;
using System.Collections.Generic;
using System.Text;

namespace WebWindows
{
    public interface IWebWindow
    {
        void WaitForExit();
        void Show();
        void ShowMessage(string title, string body);
        void Invoke(Action workItem);
        void NavigateToUrl(string url);
        event EventHandler<string> OnWebMessageReceived;
        void SendMessage(string message);
    }
}
