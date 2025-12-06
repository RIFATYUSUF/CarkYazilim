using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businiess.Abstract
{
    public interface IHizmetlerService
    {
        List<Hizmetler> GetAll();
        Hizmetler GetById(int id);
        void Add(Hizmetler hizmetler);
        void Update(Hizmetler hizmetler);
        void Delete(Hizmetler hizmetler);
    }
}
