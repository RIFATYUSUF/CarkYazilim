using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.ViewComponents
{
    public class _TeamMemberComponentPartial : ViewComponent
    {
        ITeamMemberService _teamMemberService;

        public _TeamMemberComponentPartial(ITeamMemberService teamMemberService)
        {
            _teamMemberService = teamMemberService;
        }

        public IViewComponentResult Invoke()
        {
            var values = _teamMemberService.GetAllTeamMembers();
            return View(values);
        }
    }
}
