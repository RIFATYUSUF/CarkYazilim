using Businiess.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;

public class QuotationFormManager : IQuotationFormService
{
    private readonly IQuotationFormDal _quotationFormDal;

    public QuotationFormManager(IQuotationFormDal quotationFormDal)
    {
        _quotationFormDal = quotationFormDal;
    }

    public void Add(QuotationForm quotationForm)
    {
        _quotationFormDal.Add(quotationForm);
    }

    public void Delete(QuotationForm quotationForm)
    {
        _quotationFormDal.Delete(quotationForm);
    }

    public List<QuotationForm> GetAll()
    {
        return _quotationFormDal.GetAll();
    }

    public QuotationForm GetById(int id)
    {
        return _quotationFormDal.GetById(id);
    }

    public void Update(QuotationForm quotationForm)
    {
        _quotationFormDal.Update(quotationForm);
    }
}
