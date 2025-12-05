using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _NavbarComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
