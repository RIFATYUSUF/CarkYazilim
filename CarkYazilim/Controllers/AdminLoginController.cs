using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Businiess.Abstract;  // IAdminService

namespace CarkYazilim.Controllers
{
    public class AdminLoginController : Controller
    {
        private readonly IAdminService _adminService;

        public AdminLoginController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string username, string password)
        {
            var admin = _adminService.ValidateLogin(username, password);

            if (admin == null)
            {
                TempData["Error"] = "Kullanıcı adı veya şifre hatalı!";
                return View();
            }

            // =============================
            // 🎯 SESSION BAŞLAT
            // =============================
            HttpContext.Session.SetString("AdminUser", admin.UserName);
            HttpContext.Session.SetInt32("AdminId", admin.AdminId);

            // =============================
            // 🎯 Admin Paneline Yönlendir
            // =============================
            return RedirectToAction("Index", "Admin");
        }

        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}
