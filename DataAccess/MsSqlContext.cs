using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class MsSqlContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"server=(localdb)\MSSQLLocalDB;database=CarkYazilim;integrated security=true;");
        }
        public DbSet<Header> Headers { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }
        public DbSet<Services> Services { get; set; }
        public DbSet<TeamMember> TeamMembers { get; set; }
        public DbSet<QuotationForm> QuotationForms { get; set; }
        public DbSet<Admin> Admins { get; set; }
    }
}
