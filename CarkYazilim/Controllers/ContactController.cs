using Businiess.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    public class ContactController : Controller
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpPost]
        public IActionResult SendMessage(Contact contact)
        {
            contact.SendDate = DateTime.Now;

            _contactService.ContactAdd(contact);

            TempData["Success"] = "Mesajınız başarıyla gönderildi.";

            return RedirectToAction("Index", "DefaultController1");
        }
    }
}
