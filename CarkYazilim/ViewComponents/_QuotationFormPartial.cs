using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _QuotationFormPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
