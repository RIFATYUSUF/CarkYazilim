using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    public class LayoutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
