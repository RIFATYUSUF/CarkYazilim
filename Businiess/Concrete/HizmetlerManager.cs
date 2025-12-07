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
    public class HizmetlerManager : IHizmetlerService
    {
        IHizmetlerDal _hizmetlerDal;

        public HizmetlerManager(IHizmetlerDal hizmetlerDal)
        {
            _hizmetlerDal = hizmetlerDal;
        }

        public void Add(Hizmetler hizmetler)
        {
            _hizmetlerDal.Add(hizmetler);
        }

        public void Delete(Hizmetler hizmetler)
        {
            _hizmetlerDal.Delete(hizmetler);
        }

        public List<Hizmetler> GetAll()
        {
            return _hizmetlerDal.GetAll();
        }

        public Hizmetler GetById(int id)
        {
            return _hizmetlerDal.GetById(id);
        }

        public void Update(Hizmetler hizmetler)
        {
            _hizmetlerDal.Update(hizmetler);
        }
    }
}
