using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _ServiceComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}

