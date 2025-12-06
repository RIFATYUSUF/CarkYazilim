using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents.LayoutViewComponent
{
    public class _LayoutNavbarComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
