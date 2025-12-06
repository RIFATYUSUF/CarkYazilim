using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _ServiceComponentPartial : ViewComponent
    {
        IServicesService _servicesService;

        public _ServiceComponentPartial(IServicesService servicesService)
        {
            _servicesService = servicesService;
        }

        public IViewComponentResult Invoke()
        {
            var values = _servicesService.GetAll();
            return View(values);
        }
    }
}
