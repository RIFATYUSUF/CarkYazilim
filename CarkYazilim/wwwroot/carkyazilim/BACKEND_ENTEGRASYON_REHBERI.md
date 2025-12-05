# Backend Entegrasyon Rehberi

Bu dosya, frontend kodlarının ASP.NET Core MVC ile entegrasyonu için gerekli bilgileri içerir.

## 📁 Klasör Yapısı

```
Views/
  Shared/
    _Layout.cshtml          # Ana layout dosyası
    _Header.cshtml          # Header partial view
    _Footer.cshtml          # Footer partial view
    _Hero.cshtml            # Hero section partial view
    _Services.cshtml        # Hizmetler section partial view
    _Portfolio.cshtml       # Portföy section partial view
    _Team.cshtml            # Ekip section partial view
    _Contact.cshtml         # İletişim section partial view
    _TeklifModal.cshtml     # Teklif formu modal partial view
  Home/
    Index.cshtml            # Ana sayfa view
```

## 🎯 Controller Yapısı

### HomeController

```csharp
public class HomeController : Controller
{
    public IActionResult Index()
    {
        // Hizmetler listesi (opsiyonel - veritabanından çekilebilir)
        ViewBag.Services = GetServices(); // veya null
        
        // Portföy listesi (opsiyonel - veritabanından çekilebilir)
        ViewBag.Portfolio = GetPortfolio(); // veya null
        
        // Ekip listesi (opsiyonel - veritabanından çekilebilir)
        ViewBag.Team = GetTeam(); // veya null
        
        // İletişim formu modeli (opsiyonel)
        ViewBag.ContactModel = new ContactViewModel();
        
        return View();
    }
    
    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult TeklifGonder(TeklifViewModel model)
    {
        if (!ModelState.IsValid)
        {
            // Hata durumunda geri dön
            return Json(new { success = false, message = "Form doğrulama hatası" });
        }
        
        // Form verilerini işle
        // - Veritabanına kaydet
        // - Email gönder
        // - Dosyaları kaydet (wwwroot/uploads klasörüne)
        
        return Json(new { success = true, message = "Teklif formunuz başarıyla gönderildi!" });
    }
    
    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult IletisimGonder(ContactViewModel model)
    {
        if (!ModelState.IsValid)
        {
            return Json(new { success = false, message = "Form doğrulama hatası" });
        }
        
        // Form verilerini işle
        // - Veritabanına kaydet
        // - Email gönder
        
        return Json(new { success = true, message = "Mesajınız başarıyla gönderildi!" });
    }
}
```

## 📦 Model Sınıfları

### TeklifViewModel

```csharp
public class TeklifViewModel
{
    [Required(ErrorMessage = "Ad soyad zorunludur")]
    [Display(Name = "Ad Soyad")]
    public string Name { get; set; }
    
    public string Company { get; set; }
    
    [Required(ErrorMessage = "E-posta zorunludur")]
    [EmailAddress(ErrorMessage = "Geçerli bir e-posta adresi giriniz")]
    [Display(Name = "E-posta")]
    public string Email { get; set; }
    
    [Phone(ErrorMessage = "Geçerli bir telefon numarası giriniz")]
    [Display(Name = "Telefon")]
    public string Phone { get; set; }
    
    [Display(Name = "Hizmet Türü")]
    public string Service { get; set; }
    
    [Display(Name = "Proje Önceliği")]
    public string Priority { get; set; }
    
    [Display(Name = "Bütçe Aralığı")]
    public string Budget { get; set; }
    
    [Display(Name = "Tahmini Teslim Süresi")]
    public string Timeline { get; set; }
    
    [Required(ErrorMessage = "Mesaj zorunludur")]
    [StringLength(2000, MinimumLength = 10, ErrorMessage = "Mesaj en az 10, en fazla 2000 karakter olmalıdır")]
    [Display(Name = "Proje Detayları")]
    public string Message { get; set; }
    
    [Display(Name = "Tercih Edilen İletişim Yöntemi")]
    public string ContactPref { get; set; }
    
    [Display(Name = "Bizi Nereden Duydunuz?")]
    public string Source { get; set; }
    
    [Display(Name = "Dosyalar")]
    public List<IFormFile> Files { get; set; }
    
    [Required(ErrorMessage = "KVKK onayı zorunludur")]
    [Display(Name = "KVKK Onayı")]
    public bool KvkkAccepted { get; set; }
    
    [Display(Name = "Pazarlama İzni")]
    public bool MarketingAccepted { get; set; }
}
```

### ContactViewModel

```csharp
public class ContactViewModel
{
    [Required(ErrorMessage = "Ad soyad zorunludur")]
    [Display(Name = "Ad Soyad")]
    public string Name { get; set; }
    
    [Required(ErrorMessage = "E-posta zorunludur")]
    [EmailAddress(ErrorMessage = "Geçerli bir e-posta adresi giriniz")]
    [Display(Name = "E-posta")]
    public string Email { get; set; }
    
    [Display(Name = "Şirket")]
    public string Company { get; set; }
    
    [Display(Name = "Hizmet")]
    public string Service { get; set; }
    
    [Required(ErrorMessage = "Mesaj zorunludur")]
    [Display(Name = "Mesaj")]
    public string Message { get; set; }
}
```

### Service Model (Hizmetler için)

```csharp
public class Service
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Icon { get; set; } // Örn: "fas fa-gamepad"
    public string Link { get; set; }
    public int Order { get; set; }
    public bool IsActive { get; set; }
}
```

### Portfolio Model (Portföy için)

```csharp
public class Portfolio
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImageUrl { get; set; }
    public string Category { get; set; }
    public DateTime CreatedDate { get; set; }
    public bool IsActive { get; set; }
}
```

### TeamMember Model (Ekip için)

```csharp
public class TeamMember
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Role { get; set; }
    public string Description { get; set; }
    public string Initials { get; set; } // Örn: "OG"
    public string LinkedInUrl { get; set; }
    public string TwitterUrl { get; set; }
    public string GitHubUrl { get; set; }
    public int Order { get; set; }
    public bool IsActive { get; set; }
}
```

## 🔧 Statik Dosyalar

CSS ve JavaScript dosyalarını `wwwroot` klasörüne kopyalayın:

```
wwwroot/
  css/
    style.css
  js/
    script.js
  images/
    (görseller buraya)
  uploads/
    (yüklenen dosyalar buraya)
```

## 📝 Form İşleme

### Teklif Formu

- Form action: `asp-action="TeklifGonder" asp-controller="Home"`
- Method: `POST`
- Enctype: `multipart/form-data` (dosya yükleme için)
- Anti-forgery token: `@Html.AntiForgeryToken()` zaten ekli

### İletişim Formu

- Form action: `asp-action="IletisimGonder" asp-controller="Home"`
- Method: `POST`
- Anti-forgery token: `@Html.AntiForgeryToken()` zaten ekli

## 🎨 ViewBag Kullanımı

Partial view'lar ViewBag'den veri alır:

- `ViewBag.Services` → Hizmetler listesi
- `ViewBag.Portfolio` → Portföy listesi
- `ViewBag.Team` → Ekip listesi
- `ViewBag.ContactModel` → İletişim formu modeli

Eğer ViewBag'de veri yoksa, partial view'lar statik içeriği gösterir.

## 🔄 AJAX vs Normal Form Submit

JavaScript dosyasında hem normal form submit hem de AJAX seçenekleri hazır. 

**Normal Form Submit (Varsayılan):**
- Form doğrudan backend'e gönderilir
- Sayfa yenilenir veya redirect olur
- Backend'de `return View()` veya `return RedirectToAction()` kullanın

**AJAX Submit (Opsiyonel):**
- JavaScript'teki yorum satırlarını açın
- Backend'de `return Json()` kullanın
- Sayfa yenilenmez

## 📧 Email Gönderme

Form gönderimlerinde email göndermek için:

```csharp
// Startup.cs veya Program.cs'de email servisi ekleyin
services.AddTransient<IEmailSender, EmailSender>();

// Controller'da kullanın
await _emailSender.SendEmailAsync(
    model.Email,
    "Teklif Formu Alındı",
    "Formunuz başarıyla alındı..."
);
```

## 💾 Dosya Yükleme

Teklif formunda dosya yükleme için:

```csharp
if (model.Files != null && model.Files.Count > 0)
{
    foreach (var file in model.Files)
    {
        if (file.Length > 0)
        {
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(_webHostEnvironment.WebRootPath, "uploads", fileName);
            
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
        }
    }
}
```

## ✅ Yapılacaklar

1. ✅ View dosyaları hazır
2. ✅ Partial view'lar hazır
3. ✅ Form action'ları hazır
4. ⏳ Controller oluştur
5. ⏳ Model sınıfları oluştur
6. ⏳ Veritabanı modelleri oluştur (opsiyonel)
7. ⏳ Email servisi ekle
8. ⏳ Dosya yükleme işlemini ekle
9. ⏳ wwwroot klasörüne statik dosyaları kopyala

## 📌 Notlar

- Tüm form alanları `name` attribute'ları ile backend'e uyumlu hazırlandı
- Anti-forgery token'lar eklendi
- Form validation JavaScript'te yapılıyor, backend'de de yapmanız önerilir
- Partial view'lar model bekliyor ama null ise statik içerik gösterir
- Responsive tasarım mevcut
- SEO meta tag'leri hazır


