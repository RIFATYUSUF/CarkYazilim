using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businiess.Abstract
{
    public interface IQuotationFormService 
    {
        void Add(QuotationForm quotationForm);
        void Delete(QuotationForm quotationForm);
        void Update(QuotationForm quotationForm);
        List<QuotationForm> GetAll();
        QuotationForm GetById(int id);
    }
}
