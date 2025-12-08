using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
