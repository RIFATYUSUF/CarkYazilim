using Businiess.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    public class PortfolioController1 : AdminBaseController
    {
        IPortfolioService _portfolioService;

        public PortfolioController1(IPortfolioService portfolioService)
        {
            _portfolioService = portfolioService;
        }

        public IActionResult PortfolioList()
        {
            var value = _portfolioService.GetAllPortfolios();
            return View(value);
        }
        [HttpGet]
        public IActionResult CreatePortfolio()
        {
            return View();
        }
        [HttpPost]
        public IActionResult CreatePortfolio(Portfolio model, IFormFile ImageFile)
        {
            if (ImageFile != null && ImageFile.Length > 0)
            {
                // 1) Doğru klasör yolu
                var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/ui/img");

                // 2) Klasör yoksa oluştur
                if (!Directory.Exists(uploadPath))
                    Directory.CreateDirectory(uploadPath);

                // 3) Benzersiz dosya adı oluştur
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(ImageFile.FileName);

                // 4) Fiziksel tam yol
                var filePath = Path.Combine(uploadPath, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    ImageFile.CopyTo(stream);
                }

                // 5) Veritabanına kaydedilecek URL
                model.ImageUrl1 = "/ui/img/" + fileName;
            }

            _portfolioService.PortfolioAdd(model);
            return RedirectToAction("PortfolioList");
        }

        [HttpGet]
        public IActionResult EditPortfolio(int id)
        {
            var value = _portfolioService.GetById(id);
            return View(value);
        }
        [HttpPost]
        public IActionResult EditPortfolio(Portfolio model, IFormFile ImageFile)
        {
            if (ImageFile != null && ImageFile.Length > 0)
            {
                var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/ui/img");
                if (!Directory.Exists(uploadPath))
                    Directory.CreateDirectory(uploadPath);
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(ImageFile.FileName);
                var filePath = Path.Combine(uploadPath, fileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    ImageFile.CopyTo(stream);
                }
                model.ImageUrl1 = "/ui/img/" + fileName;
            }
            _portfolioService.PortfolioUpdate(model);
            return RedirectToAction("PortfolioList");
        }
        public IActionResult DeletePortfolio(int id)
        {
            var value = _portfolioService.GetById(id);
            _portfolioService.PortfolioDelete(value);
            return RedirectToAction("PortfolioList");
        }

    }
}
