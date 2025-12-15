using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class AdminMessagesViewComponentPartial : ViewComponent
    {

        private readonly IContactService _contactService;

        public AdminMessagesViewComponentPartial(IContactService contactService)
        {
            _contactService = contactService;
        }

        public IViewComponentResult Invoke()
        {
            var messages = _contactService.GetAll();
            return View(messages);
        }
    }
}
