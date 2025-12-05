using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _FeatureComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
