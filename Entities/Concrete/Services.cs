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
        public string ServiceTitle { get; set; } = string.Empty;
        public string ServiceDescription { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public string Link { get; set; } = "#";
        public bool IsActive { get; set; } = true;
    }
}
