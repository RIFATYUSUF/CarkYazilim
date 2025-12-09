using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

public class AdminController : Controller
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
