using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Services : IEntity
    {
        public int ServicesId { get; set; }
        public string ServiceTitle { get; set; }
        public string ServiceDescription { get; set; }
        public string Icon { get; set; }
        public string Link { get; set; }
        public bool IsActive { get; set; }

    }
}
