using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businiess.Abstract
{
    public interface IContactService
    {
        List<Contact> GetAll();
        Contact GetById(int id);
        void ContactAdd(Contact contact);
        void ContactDelete(Contact contact);
    }
}
