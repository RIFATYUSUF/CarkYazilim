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
    public class ServicesManager : IServicesService
    {
        private readonly IServicesDal _servicesDal;

        public ServicesManager(IServicesDal servicesDal)
        {
            _servicesDal = servicesDal;
        }

        public List<Services> GetAll()
        {
            return _servicesDal.GetAll();
        }

        public Services GetById(int id)
        {
            return _servicesDal.GetById(id);
        }

        public void Add(Services services)
        {
            _servicesDal.Add(services);
        }

        public void Update(Services services)
        {
            _servicesDal.Update(services);
        }

        public void Delete(Services services)
        {
            _servicesDal.Delete(services);
        }
    }
}
