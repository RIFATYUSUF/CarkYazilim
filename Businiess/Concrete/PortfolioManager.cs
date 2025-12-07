using Businiess.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;

namespace Businiess.Concrete
{
    public class PortfolioManager : IPortfolioService
    {
        private readonly IPortfolioDal _portfolioDal;

        public PortfolioManager(IPortfolioDal portfolioDal)
        {
            _portfolioDal = portfolioDal;
        }

        public List<Portfolio> GetAllPortfolios()
        {
            return _portfolioDal.GetAll();
        }

        public Portfolio GetById(int id)
        {
            return _portfolioDal.GetById(id);
        }

        public void PortfolioAdd(Portfolio portfolio)
        {
            ValidatePortfolio(portfolio);
            _portfolioDal.Add(portfolio);
        }

        public void PortfolioDelete(Portfolio portfolio)
        {
            if (portfolio.PortfolioId <= 0)
                throw new Exception("Geçersiz ID!");

            _portfolioDal.Delete(portfolio);
        }

        public void PortfolioUpdate(Portfolio portfolio)
        {
            if (portfolio.PortfolioId <= 0)
                throw new Exception("Geçersiz ID!");

            ValidatePortfolio(portfolio);
            _portfolioDal.Update(portfolio);
        }

        private void ValidatePortfolio(Portfolio portfolio)
        {
            if (string.IsNullOrWhiteSpace(portfolio.Title))
                throw new Exception("Portfolio başlığı boş olamaz!");

            if (portfolio.Title.Length > 150)
                throw new Exception("Portfolio başlığı 150 karakterden uzun olamaz!");

            if (string.IsNullOrWhiteSpace(portfolio.Description))
                throw new Exception("Portfolio açıklaması boş olamaz!");

            if (portfolio.ImageUrl1 != null && portfolio.ImageUrl1.Length > 500)
                throw new Exception("Resim URL'si çok uzun!");
        }
    }
}
