using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace CarkYazilim.Controllers
{
    public class AdminBaseController : Controller
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            // 🔒 Admin session kontrolü
            if (HttpContext.Session.GetString("AdminUser") == null)
            {
                context.Result = RedirectToAction("Index", "AdminLogin");
                return;
            }

            base.OnActionExecuting(context);
        }
    }
}
