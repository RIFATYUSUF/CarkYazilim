using Businiess.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;

namespace Businiess.Concrete
{
    public class ServicesManager : IServicesService
    {
        private readonly IServicesDal _servicesDal;

        public ServicesManager(IServicesDal servicesDal)
        {
            _servicesDal = servicesDal;
        }

        public List<Services> GetAllServices()
        {
            return _servicesDal.GetAll();
        }

        public void ServicesAdd(Services services)
        {
            ValidateService(services);
            _servicesDal.Add(services);
        }

        public void ServicesDelete(Services services)
        {
            if (services.ServicesId <= 0)
                throw new Exception("Geçersiz ID!");

            _servicesDal.Delete(services);
        }

        public void ServicesUpdate(Services services)
        {
            if (services.ServicesId <= 0)
                throw new Exception("Geçersiz ID!");

            ValidateService(services);
            _servicesDal.Update(services);
        }

        private void ValidateService(Services services)
        {
            if (string.IsNullOrWhiteSpace(services.ServiceTitle))
                throw new Exception("Servis başlığı boş olamaz!");

            if (services.ServiceTitle.Length > 150)
                throw new Exception("Servis başlığı 150 karakterden uzun olamaz!");

            if (string.IsNullOrWhiteSpace(services.ServiceDescription))
                throw new Exception("Servis açıklaması boş olamaz!");

            if (!string.IsNullOrWhiteSpace(services.Icon) && services.Icon.Length > 200)
                throw new Exception("Icon alanı çok uzun!");
        }
    }
}
