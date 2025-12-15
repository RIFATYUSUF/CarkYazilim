using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

public class AdminMessagesViewComponent : ViewComponent
{
    private readonly IContactService _contactService;

    public AdminMessagesViewComponent(IContactService contactService)
    {
        _contactService = contactService;
    }

    public IViewComponentResult Invoke()
    {
        var messages = _contactService.GetAll();
        return View(messages);
    }
}
