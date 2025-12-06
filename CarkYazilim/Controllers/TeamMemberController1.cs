using Businiess.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    public class TeamMemberController1 : Controller
    {
        ITeamMemberService _teamMemberService;

        public TeamMemberController1(ITeamMemberService teamMemberService)
        {
            _teamMemberService = teamMemberService;
        }

        public IActionResult TeamMemberList()
        {
            var value = _teamMemberService.GetAllTeamMembers();
            return View(value);
        }
    }
}
