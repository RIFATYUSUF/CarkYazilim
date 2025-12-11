using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

public class AdminController : Controller
{
    private readonly IQuotationFormService _quotationService;

    public AdminController(IQuotationFormService quotationService)
    {
        _quotationService = quotationService;
    }

    public IActionResult Index()
    {
        // Kullanıcı giriş yapmamışsa login sayfasına gönder
        if (HttpContext.Session.GetString("AdminUser") == null)
            return RedirectToAction("Index", "AdminLogin");

        // Giriş yapılmışsa teklifleri çek
        var list = _quotationService.GetAll();
        return View(list);
    }
}
