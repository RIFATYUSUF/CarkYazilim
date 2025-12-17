using Businiess.Abstract;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Authorize]
public class AdminController : Controller
{
    private readonly IQuotationFormService _quotationService;
    private readonly IContactService _contactService;

    public AdminController(
            IQuotationFormService quotationService,
            IContactService contactService)
    {
        _quotationService = quotationService;
        _contactService = contactService;
    }

    public IActionResult Index()
    {
        var list = _quotationService.GetAll();
        return View(list);
    }

    // SİLME ACTION
    public IActionResult Delete(int id)
    {
        var value = _quotationService.GetById(id);
        if (value != null)
        {
            _quotationService.Delete(value);
        }

        return RedirectToAction("Index");
    }
    
    //  MESAJ  SİLME
    
    [HttpGet]
    public IActionResult DeleteContact(int id)
    {
        var message = _contactService.GetById(id);
        if (message != null)
        {
            _contactService.ContactDelete(message);
        }

        return RedirectToAction("Index");
    }
}
