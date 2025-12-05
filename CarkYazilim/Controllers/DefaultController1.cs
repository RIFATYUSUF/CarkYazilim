using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    public class DefaultController1 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
