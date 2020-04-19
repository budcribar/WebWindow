using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using RemoteableWebWindowService;
using WebWindows;

namespace PeakSwc.RemoteableWebWindows
{
    public class Startup
    {
        ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> fileDictionary = new ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>>();
        BlockingCollection<(Guid, string)> fileCollection = new BlockingCollection<(Guid, string)>();
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddGrpc();
            services.AddSingleton<ConcurrentDictionary<Guid, WebWindow>>();
            services.AddSingleton<ConcurrentDictionary<Guid,ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>>>(fileDictionary);
            services.AddSingleton<BlockingCollection<(Guid,string)>>(fileCollection);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            //app.UseStaticFiles(new StaticFileOptions
            //{
            //    OnPrepareResponse = (context) => {
            //        var c = context.File;
            //    },
            //    FileProvider = new FileResolver(fileDictionary, fileCollection)

            //});

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGrpcService<RemoteWebWindowService>();

                endpoints.MapGet("/", async context =>
                {
                    var services = context.RequestServices;
                    var dict = services.GetService<ConcurrentDictionary<Guid, WebWindow>>();

                    var links = string.Join("<br/>", dict.Keys.Select(x => $"<a href='{x}/wwwroot/index.html'>{x}</a>"));

                    await context.Response.WriteAsync(links);
                });
            });
        }
    }
}
