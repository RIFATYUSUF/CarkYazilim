using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businiess.Abstract
{
    public interface IAdminService
    {
        Admin ValidateLogin(string userName, string password);
    }
}
