using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    public class ServicesController : Controller
    {
        IHizmetlerService _hizmetlerService;

        public ServicesController(IHizmetlerService hizmetlerService)
        {
            _hizmetlerService = hizmetlerService;
        }

        public IActionResult ServicesList()
        {
            var value = _hizmetlerService.GetAll();
            return View(value);
        }
    }
}
