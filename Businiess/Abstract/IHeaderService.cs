using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businiess.Abstract
{
    public interface IHeaderService
    {
        void HeaderAdd(Header header);
        void HeaderUpdate(Header header);
        void HeaderDelete(Header header);
        Header GetHeaderById(int id);
        List<Header> GetAllHeaders();

    }
}
