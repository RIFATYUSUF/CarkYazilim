using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _AboutComponent : ViewComponent
    {
        IHeaderService _headerService;
public _AboutComponent(IHeaderService headerService)
        {
            _headerService = headerService;
        }

        public IViewComponentResult Invoke()
        {
            var values = _headerService.GetAllHeaders();
            return View(values);
        }
    }
}
