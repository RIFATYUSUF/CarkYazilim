using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents.LayoutViewComponent
{
    public class _LayoutHeaderComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
