using System;
using System.Collections.Concurrent;
using System.IO;
using System.Threading;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PeakSwc.StaticFiles;
using WebWindows;
using PeakSwc.Builder;

using RemoteableWebWindowService;

namespace PeakSwc.RemoteableWebWindows
{
    public class Startup
    {
        private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> fileDictionary = new ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>>();
        private readonly BlockingCollection<(Guid, string)> fileCollection = new BlockingCollection<(Guid, string)>();
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();

            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                options.Cookie.Name = "WebWindow";
                options.IdleTimeout = TimeSpan.FromSeconds(60 * 60);
                options.Cookie.IsEssential = true;
            });

            services.AddSingleton<IPC>();

            //services.AddPeakSwcServerSideBlazor(x => x.DetailedErrors = true);
            services.AddSignalR();
            services.AddGrpc();
            services.AddSingleton<ConcurrentDictionary<Guid, WebWindow>>();
            services.AddSingleton(fileDictionary);
            services.AddSingleton<BlockingCollection<(Guid,string)>>(fileCollection);


            services.AddCors(o =>
            {
                o.AddPolicy("MyPolicy", builder =>
                {
                    builder.WithOrigins("localhost:4200", "YourCustomDomain");
                    builder.WithMethods("POST, OPTIONS");
                    builder.AllowAnyHeader();
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

            //app.UseStaticFiles()

           

            app.UseRouting();

            app.UseCors("MyPolicy");

            app.UseGrpcWeb();

            app.UseSession();

            app.PeakSwcUseStaticFiles(new StaticFileOptions
            {
                FileProvider = new FileResolver(fileDictionary, fileCollection),
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
                //endpoints.MapHub<WebWindowHub>("/webWindowHub", (x) => { x.Transports = Microsoft.AspNetCore.Http.Connections.HttpTransportType.LongPolling; });
                //endpoints.PeakSwcMapBlazorHub((x) => { x.Transports = Microsoft.AspNetCore.Http.Connections.HttpTransportType.LongPolling; });
                //endpoints.PeakSwcMapBlazorHub();
                endpoints.MapGrpcService<RemoteWebWindowService>();

                endpoints.MapGrpcService<BrowserIPCService>().EnableGrpcWeb();

                //endpoints.MapGet("/", async context =>
                //{
                //    var services = context.RequestServices;
                //    var dict = services.GetService<ConcurrentDictionary<Guid, WebWindow>>();

                //    var links = string.Join("<br/>", dict.Keys.Select(x => $"<a href='{x}/wwwroot/index.html'>{x}</a>"));

                //    await context.Response.WriteAsync(links);
                //});



                endpoints.MapRazorPages();

               
            });
        }
    }
}
