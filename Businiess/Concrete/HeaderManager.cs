using Businiess.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businiess.Concrete
{
    public class HeaderManager : IHeaderService
    {
        IHeaderDal _headerDal;

        public HeaderManager(IHeaderDal headerDal)
        {
            _headerDal = headerDal;
        }

        public List<Header> GetAllHeaders()
        {
            return _headerDal.GetAll();
        }

        public void HeaderAdd(Header header)
        {
            // Basit validation
            if (string.IsNullOrWhiteSpace(header.Title))
                throw new Exception("Başlık boş olamaz!");

            if (header.Title.Length > 100)
                throw new Exception("Başlık 100 karakterden uzun olamaz!");

            _headerDal.Add(header);
        }

        public void HeaderDelete(Header header)
        {
            if (header.HeaderId <= 0)
                throw new Exception("Geçersiz ID!");

            _headerDal.Delete(header);
        }

        public void HeaderUpdate(Header header)
        {
            if (header.HeaderId <= 0)
                throw new Exception("Geçersiz ID!");

            if (string.IsNullOrWhiteSpace(header.Title))
                throw new Exception("Başlık boş olamaz!");

            if (header.Title.Length > 100)
                throw new Exception("Başlık 100 karakterden uzun olamaz!");

            _headerDal.Update(header);
        }
    }
}
