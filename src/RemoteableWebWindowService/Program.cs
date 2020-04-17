using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Windows.Forms;
using System.Net;

namespace PeakSwc.RemoteableWebWindows
{
    public class Program
    {
        public static Form form;
        [STAThread]
        public static void Main(string[] args)
        {
            form = new Form();
            form.Visible = false;
            form.WindowState = FormWindowState.Minimized;

            var ww = new webwindow(new Uri("https://localhost:443"), new Uri("https://localhost:5001"));
            ww.Start();


            Task.Run(() => CreateHostBuilder(args).Build().Run());

           
            Application.Run(form);

        }

        // Additional configuration is required to successfully run gRPC on macOS.
        // For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.ConfigureKestrel(options => {
                        //options.Listen(IPAddress.Loopback, 80);
                        //options.Listen(IPAddress.Parse( "13.64.108.0"), 443, listenOptions => { listenOptions.UseHttps(); });
                    });
                    webBuilder.UseStartup<Startup>();
                });
    }
}
