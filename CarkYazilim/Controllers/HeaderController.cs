using Businiess.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace CarkYazilim.Controllers
{
    public class HeaderController : Controller
    {
        private readonly IHeaderService _headerService;

        public HeaderController(IHeaderService headerService)
        {
            _headerService = headerService;
        }

        // LIST
        public IActionResult HeaderList()
        {
            var values = _headerService.GetAllHeaders();
            return View(values);
        }

        // GET UPDATE
        [HttpGet]
        public IActionResult UpdateHeader(int id)
        {
            var header = _headerService.GetHeaderById(id);

            if (header == null)
                return RedirectToAction("HeaderList");

            return View(header);
        }

        // POST UPDATE
        [HttpPost]
        public IActionResult UpdateHeader(Header header)
        {
            try
            {
                _headerService.HeaderUpdate(header);
                return RedirectToAction("HeaderList");
            }
            catch (Exception ex)
            {
                ViewBag.ErrorMessage = ex.Message;
                return View(header);
            }
        }
    }
}
