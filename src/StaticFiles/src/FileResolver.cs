using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;

namespace PeakSwc.Microsoft.AspNetCore.StaticFiles
{
    public class FileInfo : IFileInfo
    {
        private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> _fileDictionary;
        private readonly BlockingCollection<(Guid, string)> _fileCollection;
        private string path;
        private HttpContext context;
        Stream stream = null;

        private Stream GetStream()
        {
            if (stream == null)
            {
                if (string.IsNullOrEmpty(path)) return null;

                if (!context.Session.Keys.Contains("WebWindow"))
                {
                    if (Path.GetDirectoryName(path).Length > 1)
                    {
                        // TODO: need a better way to get the Guid
                        var p = path.Split('/')[1];
                        var f = path.Replace(p, "").Substring(2);
                        path = f;

                        
                        context.Items["Guid"] = new Guid(p);
                    }
                    else return null;
                   
                }
               
                stream = ProcessFile((Guid)context.Items["Guid"], path);
            }

            return stream;
        } 

        public FileInfo(HttpContext context, string path, ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> fileDictionary, BlockingCollection<(Guid, string)> fileCollect)
        {
            this.path = path;
            _fileDictionary = fileDictionary;
            _fileCollection = fileCollect;
            this.context = context;
        }

        public bool Exists => GetStream() != null;

        public long Length => GetStream().Length;

        public string PhysicalPath => null;

        public string Name => Path.GetFileName(path);

        public DateTimeOffset LastModified => DateTime.Now;

        public bool IsDirectory => false;

        private Stream ProcessFile(Guid id, string appFile)
        {

            if (!_fileDictionary.ContainsKey(id))
                _fileDictionary.TryAdd(id, new ConcurrentDictionary<string, (MemoryStream, ManualResetEventSlim)>());

            _fileDictionary[id][appFile] = (null, new ManualResetEventSlim());
            _fileCollection.Add((id, appFile));

            _fileDictionary[id][appFile].mres.Wait();
            return _fileDictionary[id][appFile].stream;
        }


        public Stream CreateReadStream()
        {
            return GetStream();
        }
    }

    public class FileResolver : IFileProvider
    {
        private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> _fileDictionary;
        private readonly BlockingCollection<(Guid, string)> _fileCollection;
        public FileResolver (ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> fileDictionary, BlockingCollection<(Guid, string)> fileCollect) {
            _fileDictionary = fileDictionary;
            _fileCollection = fileCollect;
        }

        public HttpContext Context { get; set; }


        public IDirectoryContents GetDirectoryContents(string subpath)
        {
            throw new NotImplementedException();
        }

        public IFileInfo GetFileInfo(string subpath)
        {
            return new FileInfo(Context, subpath, _fileDictionary, _fileCollection);
        }

        public IChangeToken Watch(string filter)
        {
            return NullChangeToken.Singleton;
        }
    }
}
