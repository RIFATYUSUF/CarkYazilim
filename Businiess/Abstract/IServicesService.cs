using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businiess.Abstract
{
    public interface IServicesService
    {
        List<Services> GetAll();
        Services GetById(int id);
        void Add(Services services);
        void Update(Services services);
        void Delete(Services services);
    }
}
