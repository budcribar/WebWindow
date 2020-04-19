using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading;

namespace RemoteableWebWindowService
{
    public class FileInfo : IFileInfo
    {
        private readonly ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> _fileDictionary;
        private readonly BlockingCollection<(Guid, string)> _fileCollection;
        private readonly string path;
        Stream stream = null;

        private Stream GetStream()
        {
            if (stream == null)
            {
                if (string.IsNullOrEmpty(path)) return null;
                var p = path.Split('/')[1];
                var f = path.Replace(p, "").Substring(2);
                stream = ProcessFile(new Guid(p), f);
            }

            return stream;
        } 

        public FileInfo(string path, ConcurrentDictionary<Guid, ConcurrentDictionary<string, (MemoryStream stream, ManualResetEventSlim mres)>> fileDictionary, BlockingCollection<(Guid, string)> fileCollect)
        {
            this.path = path;
            _fileDictionary = fileDictionary;
            _fileCollection = fileCollect;
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


        public IDirectoryContents GetDirectoryContents(string subpath)
        {
            throw new NotImplementedException();
        }

        public IFileInfo GetFileInfo(string subpath)
        {
            return new FileInfo(subpath, _fileDictionary, _fileCollection);
        }

        public IChangeToken Watch(string filter)
        {
            return NullChangeToken.Singleton;
        }
    }
}
