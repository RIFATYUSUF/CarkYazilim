using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businiess.Abstract
{
    public interface IPortfolioService
    {
        void PortfolioAdd(Portfolio portfolio);
        void PortfolioUpdate(Portfolio portfolio);
        void PortfolioDelete(Portfolio portfolio);
        List<Portfolio> GetAllPortfolios();
    }
}
