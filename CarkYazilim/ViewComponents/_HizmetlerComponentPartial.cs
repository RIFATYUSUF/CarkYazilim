using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _HizmetlerComponentPartial : ViewComponent
    {
        private readonly IHizmetlerService _hizmetlerService;
        public _HizmetlerComponentPartial(IHizmetlerService hizmetlerService)
        {
            _hizmetlerService = hizmetlerService;
        }
        public IViewComponentResult Invoke()
        {

            var values = _hizmetlerService.GetAll();
            return View(values);
        }
    }
}
