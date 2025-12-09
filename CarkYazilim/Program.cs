using Businiess.Abstract;
using Businiess.Concrete;
using DataAccess;
using DataAccess.Abstract;
using DataAccess.Concrete;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<MsSqlContext>();

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

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
