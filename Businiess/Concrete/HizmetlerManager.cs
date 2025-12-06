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
            throw new NotImplementedException();
        }

        public void Delete(Hizmetler hizmetler)
        {
            throw new NotImplementedException();
        }

        public List<Hizmetler> GetAll()
        {
            return _hizmetlerDal.GetAll();
        }

        public Hizmetler GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Hizmetler hizmetler)
        {
            throw new NotImplementedException();
        }
    }
}
