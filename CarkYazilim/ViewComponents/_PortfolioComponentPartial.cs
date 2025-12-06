using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _PortfolioComponentPartial : ViewComponent
    {
        IPortfolioService _portfolioService;

        public _PortfolioComponentPartial(IPortfolioService portfolioService)
        {
            _portfolioService = portfolioService;
        }

        public IViewComponentResult Invoke()
        {
            var values = _portfolioService.GetAllPortfolios();
            return View(values);
        }
    }
}
