﻿using System;
using System.Collections.Concurrent;
using System.IO;
using System.Threading;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PeakSwc.StaticFiles;
using PeakSwc.Builder;
using RemoteableWebWindowService;


namespace PeakSwc.RemoteableWebWindows
{
    public class Startup
    {
        private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> fileDictionary = new ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>>();
        private readonly ConcurrentDictionary<Guid, BlockingCollection<(Guid, string)>> fileCollection = new ConcurrentDictionary<Guid, BlockingCollection<(Guid, string)>>();
        private readonly ConcurrentDictionary<Guid, string> rootDictionary = new ConcurrentDictionary<Guid, string>();
        private readonly ConcurrentDictionary<Guid, IPC> ipcDictionary = new ConcurrentDictionary<Guid, IPC>();


        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
           
            services.AddRazorPages();
            services.AddSingleton(ipcDictionary);          
            services.AddSignalR();
            services.AddGrpc();
            services.AddSingleton(rootDictionary);
            services.AddSingleton(fileDictionary);
            services.AddSingleton(fileCollection);

            services.AddCors(o =>
            {
                o.AddPolicy("MyPolicy", builder =>
                {
                    builder.AllowAnyOrigin();
                    builder.AllowAnyHeader();
                    builder.AllowAnyMethod();
                   
                    // TODO tighten this up
                    //builder.WithOrigins("localhost:443", "localhost", "YourCustomDomain");
                   // builder.WithMethods("POST, OPTIONS");
                    //builder.AllowAnyHeader();
                    builder.WithExposedHeaders("Grpc-Status", "Grpc-Message");
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }      

            app.UseRouting();

            app.UseCors("MyPolicy");

            app.UseGrpcWeb();
 
            app.PeakSwcUseStaticFiles(new StaticFileOptions
            {
                // TODO get from context
                FileProvider = new FileResolver(fileDictionary, fileCollection, rootDictionary),
                //OnPrepareResponse = context => {
                //    var components = context.Context.Request.Path.Value.Split('/');
                //    if(components.Length >= 2 && Guid.TryParse(components[1], out Guid g))
                //    {
                //        var newTarget =  string.Join("/", components.TakeLast(components.Length - 2));
                //        context.Context.Response.Redirect(newTarget, false);
                //    }
                //}
            });

            app.UseEndpoints(endpoints =>
            {             
                endpoints.MapGrpcService<RemoteWebWindowService>();

                endpoints.MapGrpcService<BrowserIPCService>().EnableGrpcWeb();

                endpoints.MapGet("/app", async context =>
                {
                    var guid = context.Request.Cookies["guid"];
                    var home = context.Request.Cookies["home"];

                    if (ipcDictionary.ContainsKey(Guid.Parse(guid)))
                    {

                        if (context.Request.QueryString.HasValue && context.Request.QueryString.Value.Contains("restart"))
                        {                         
                            ipcDictionary[Guid.Parse(guid)].ReceiveMessage("booted:");

                            // TODO synchronize properly
                            Thread.Sleep(3000);
                        }

                        context.Response.Redirect(home);
                    }
                });

                endpoints.MapRazorPages();               
            });
        }
    }
}
