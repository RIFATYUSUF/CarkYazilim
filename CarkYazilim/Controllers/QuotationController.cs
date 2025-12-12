using Businiess.Abstract;
using CarkYazilim.Controllers;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

public class QuotationController : AdminBaseController

{
    private readonly IQuotationFormService _service;

    public QuotationController(IQuotationFormService service)
    {
        _service = service;
    }

    [HttpPost]
    public IActionResult Send(QuotationForm form)
    {
        form.SendDate = DateTime.Parse(DateTime.Now.ToString("yyyy-MM-dd"));


        _service.Add(form);
        TempData["SuccessMessage"] = "Mesajınız alınmıştır, en kısa sürede dönüş sağlayacağız.";
        return RedirectToAction("Index", "DefaultController1");
        // istersen teşekkür sayfasına alırız
    }
}
