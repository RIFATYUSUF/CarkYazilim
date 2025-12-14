using Businiess.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    [Authorize(Roles = "Admin")]
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
        public IActionResult DeleteService(int id)
        {
            var value = _hizmetlerService.GetById(id);
            _hizmetlerService.Delete(value);
            return RedirectToAction("ServicesList");
        }
        [HttpGet]
        public IActionResult CreateServices()
        {
            return View();
        }
        [HttpPost]
        public IActionResult CreateServices(Hizmetler hizmetler)
        {
            _hizmetlerService.Add(hizmetler);
            return RedirectToAction("ServicesList");
        }
        [HttpGet]
        public IActionResult EditService(int id)
        {
            var value = _hizmetlerService.GetById(id);
            return View(value);
        }
        [HttpPost]
        public IActionResult EditService(Hizmetler hizmetler)
        {
            _hizmetlerService.Update(hizmetler);
            return RedirectToAction("ServicesList");
        }
    }
}
