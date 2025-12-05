using DataAccess.Abstract;
using DataAccess.Repository;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete
{
    public class AdminDal : GenericRepository<MsSqlContext, Admin>, IAdminDal
    {
        public Admin GetByUserName(string userName)
        {
            using (var context = new MsSqlContext())
            {
                return context.Admins.FirstOrDefault(a => a.UserName == userName);
            }
        }
    }
}
