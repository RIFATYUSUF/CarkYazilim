using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Businiess.Abstract
{
    public interface ITeamMemberService
    {
        void TeamMemberAdd(TeamMember teamMember);
        void TeamMemberUpdate(TeamMember teamMember);
        void TeamMemberDelete(TeamMember teamMember);
        List<TeamMember> GetAllTeamMembers();
    }
}
