using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Contact : IEntity
    {
        public int ContactId { get; set; }
        public string NameSurname { get; set; }
        public string EMail { get; set; }
        public string Service { get; set; }
        public string Message { get; set; }
        public DateTime SendDate { get; set; }
        public int ServicesId { get; set; }
        public Services Servies { get; set; }
    }
}
