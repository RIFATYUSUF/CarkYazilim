using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    public class DefaultController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
    }
}
