using Businiess.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarkYazilim.Controllers
{
    public class TeamMemberController1 : AdminBaseController
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
        [HttpGet]
        public IActionResult CreateTeamMember()
        {
            return View();
        }
        [HttpPost]
        public IActionResult CreateTeamMember(TeamMember teamMember)
        {
            try
            {
                _teamMemberService.TeamMemberAdd(teamMember);
                return RedirectToAction("TeamMemberList");
            }
            catch (Exception ex)
            {
                ViewBag.ErrorMessage = ex.Message;
                return View(teamMember); // Form tekrar açılır, girilen bilgiler korunur
            }
        }
        public IActionResult DeleteTeamMember(int id)
        {
            var teamMember = _teamMemberService.GetAllTeamMembers().FirstOrDefault(tm => tm.TeamMemberId == id);
            if (teamMember != null)
            {
                _teamMemberService.TeamMemberDelete(teamMember);
            }
            return RedirectToAction("TeamMemberList");
        }

        [HttpGet]
        public IActionResult UpdateTeamMember(int id)
        {
            var teamMember = _teamMemberService.GetAllTeamMembers().FirstOrDefault(tm => tm.TeamMemberId == id);
            if (teamMember != null)
            {
                return View(teamMember);
            }
            return RedirectToAction("TeamMemberList");
        }
        [HttpPost]
        public IActionResult UpdateTeamMember(TeamMember teamMember)
        {
            try
            {
                _teamMemberService.TeamMemberUpdate(teamMember);
                return RedirectToAction("TeamMemberList");
            }
            catch (Exception ex)
            {
                ViewBag.ErrorMessage = ex.Message;
                return View(teamMember); // Form tekrar açılır, girilen bilgiler korunur
            }
        }
    }
}
