using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Admin : IEntity
    {
        public int AdminId { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
    }
}
