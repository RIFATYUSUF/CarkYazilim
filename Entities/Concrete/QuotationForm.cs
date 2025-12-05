using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class QuotationForm : IEntity
    {
        public int QuotationFormId { get; set; }
        public string Name { get; set; }
        public string EMail { get; set; }
        public string Telephone { get; set; }
        public string Description { get; set; }
    }
}
