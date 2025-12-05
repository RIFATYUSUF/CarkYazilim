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
        void ServicesAdd(Services services);
        void ServicesUpdate(Services services);
        void ServicesDelete(Services services);
        List<Services> GetAllServices();
    }
}
