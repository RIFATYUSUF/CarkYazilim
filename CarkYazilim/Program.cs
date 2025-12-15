using Business.Concrete;
using Businiess.Abstract;
using Businiess.Concrete;
using DataAccess;
using DataAccess.Abstract;
using DataAccess.Concrete;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<MsSqlContext>();

// *** AUTOCAHAICON (ZORUNLU) ***

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options=>
    {
        options.Cookie.Name="MyCookie";
        options.LoginPath="/AdminLogin/Index";
        options.AccessDeniedPath="/AdminLogin/Index";

    });

// *** DI Buraya gelecek ***
builder.Services.AddScoped<IHeaderService, HeaderManager>();
builder.Services.AddScoped<IHeaderDal, HeaderDal>();
builder.Services.AddScoped<IServicesService, ServicesManager>();
builder.Services.AddScoped<IServicesDal, ServiceDal>();
builder.Services.AddScoped<ITeamMemberDal, TeamMemberDal>();
builder.Services.AddScoped<ITeamMemberService, TeamMemberManager>();
builder.Services.AddScoped<IHizmetlerService, HizmetlerManager>();
builder.Services.AddScoped<IHizmetlerDal, HizmetlerDal>();
builder.Services.AddScoped<IPortfolioService, PortfolioManager>();
builder.Services.AddScoped<IPortfolioDal, PortfolioDal>();
builder.Services.AddScoped<IQuotationFormService, QuotationFormManager>();
builder.Services.AddScoped<IQuotationFormDal, QuotationFormDal>();
builder.Services.AddScoped<IAdminService, AdminManager>();
builder.Services.AddScoped<IAdminDal, AdminDal>();
builder.Services.AddScoped<IContactService, ContactManager>();
builder.Services.AddScoped<IContactDal, ContactDal>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// *** SESSION MIDDLEWARE BURAYA GELECEK ***
app.UseAuthentication();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
