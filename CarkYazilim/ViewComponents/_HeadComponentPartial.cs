using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _HeadComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
