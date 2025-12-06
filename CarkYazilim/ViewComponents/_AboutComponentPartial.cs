using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _AboutComponentPartial : ViewComponent
    {
        IHeaderService _headerService;

        public _AboutComponentPartial(IHeaderService headerService)
        {
            _headerService = headerService;
        }

        public IViewComponentResult Invoke()
        {
            var values = _headerService.GetAllHeaders();
            return View(values);
        }
    }
}
