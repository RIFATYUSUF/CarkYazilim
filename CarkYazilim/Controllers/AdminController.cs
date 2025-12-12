using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    // 🔒 Login zorunlu
    public class AdminController : AdminBaseController
    {
        private readonly IQuotationFormService _quotationService;

        public AdminController(IQuotationFormService quotationService)
        {
            _quotationService = quotationService;
        }

        public IActionResult Index()
        {
            var list = _quotationService.GetAll();
            return View(list);
        }
    }
}
