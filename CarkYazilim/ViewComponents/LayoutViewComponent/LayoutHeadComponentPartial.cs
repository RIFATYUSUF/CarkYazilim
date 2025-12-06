using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents.LayoutViewComponent
{
    public class LayoutHeadComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
