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

namespace PeakSwc.StaticFiles
{
    public class FileInfo : IFileInfo
    {
        private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> _fileDictionary;
        private readonly ConcurrentDictionary<Guid, BlockingCollection<(Guid, string)>> _fileCollection;
        private readonly ConcurrentDictionary<Guid, string> _rootDictionary;
        private string path;
        private readonly HttpContext context;
        Stream stream = null;

        private Stream GetStream()
        {
            if (stream == null)
            {
                if (string.IsNullOrEmpty(path)) return null;

                var guid = context.Request.Cookies["guid"];
                var home = context.Request.Cookies["home"];
                var root = Path.GetDirectoryName(home);

                // TODO do we need this?
                if (File.Exists(path))
                    try
                    {
                        return File.Open(path, FileMode.Open);
                    }
                    catch { return null; }
                    

                if (!path.Contains(root))
                    path = root + path;
                if (path.StartsWith('/'))
                    path = path.Substring(1);

                stream = ProcessFile(Guid.Parse(guid), path);
            }

            return stream;
        } 

        public FileInfo(HttpContext context, string path, ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> fileDictionary, ConcurrentDictionary<Guid, BlockingCollection<(Guid, string)>> fileCollect, ConcurrentDictionary<Guid, string> rootDictionary)
        {
            this.path = path;
            _fileDictionary = fileDictionary;
            _fileCollection = fileCollect;
            _rootDictionary = rootDictionary;
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
            if (!_rootDictionary.ContainsKey(id))
                return null;

            if (!_fileDictionary.ContainsKey(id))
                _fileDictionary.TryAdd(id, new ConcurrentDictionary<string, (MemoryStream, ManualResetEventSlim)>());

            _fileDictionary[id][appFile] = (null, new ManualResetEventSlim());

            if (!_fileCollection.ContainsKey(id))
                _fileCollection.TryAdd(id, new BlockingCollection<(Guid, string)>());

            _fileCollection[id].Add((id, appFile));

            _fileDictionary[id][appFile].mres.Wait();
            var stream = _fileDictionary[id][appFile].stream;
            stream.Position = 0;

            if (appFile.EndsWith("index.html"))
            {
               
                using (StreamReader sr = new StreamReader(stream))
                {
                    var contents = sr.ReadToEnd();
                    //contents = contents.Replace("framework://blazor.desktop.js", "_framework/blazor.server.js");
                    contents = contents.Replace("framework://blazor.desktop.js", "remote/remote.blazor.desktop.js");
                    stream = new MemoryStream(Encoding.ASCII.GetBytes(contents));
                }
                   
            }
            return stream;
        }


        public Stream CreateReadStream()
        {
            return GetStream();
        }
    }

    public class FileResolver : IFileProvider
    {
        private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> _fileDictionary;
        private readonly ConcurrentDictionary<Guid,BlockingCollection<(Guid, string)>> _fileCollection;
        private readonly ConcurrentDictionary<Guid, string> _rootDictionary;

        public FileResolver (ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> fileDictionary, ConcurrentDictionary<Guid, BlockingCollection<(Guid, string)>> fileCollect, ConcurrentDictionary<Guid, string> rootDictionary) {
            _fileDictionary = fileDictionary;
            _fileCollection = fileCollect;
            _rootDictionary = rootDictionary;
        }

        public HttpContext Context { get; set; }


        public IDirectoryContents GetDirectoryContents(string subpath)
        {
            throw new NotImplementedException();
        }

        public IFileInfo GetFileInfo(string subpath)
        {
            return new FileInfo(Context, subpath, _fileDictionary, _fileCollection, _rootDictionary);
        }

        public IChangeToken Watch(string filter)
        {
            return NullChangeToken.Singleton;
        }
    }
}
