using Businiess.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;

namespace Businiess.Concrete
{
    public class TeamMemberManager : ITeamMemberService
    {
        private readonly ITeamMemberDal _teamMemberDal;

        public TeamMemberManager(ITeamMemberDal teamMemberDal)
        {
            _teamMemberDal = teamMemberDal;
        }

        public List<TeamMember> GetAllTeamMembers()
        {
            return _teamMemberDal.GetAll();
        }

        public void TeamMemberAdd(TeamMember teamMember)
        {
            Validate(teamMember);
            _teamMemberDal.Add(teamMember);
        }

        public void TeamMemberDelete(TeamMember teamMember)
        {
            if (teamMember.TeamMemberId <= 0)
                throw new Exception("Geçersiz ID!");

            _teamMemberDal.Delete(teamMember);
        }

        public void TeamMemberUpdate(TeamMember teamMember)
        {
            if (teamMember.TeamMemberId <= 0)
                throw new Exception("Geçersiz ID!");

            Validate(teamMember);
            _teamMemberDal.Update(teamMember);
        }

        private void Validate(TeamMember teamMember)
        {
            if (string.IsNullOrWhiteSpace(teamMember.Name))
                throw new Exception("Üye adı boş olamaz!");

            if (teamMember.Name.Length > 100)
                throw new Exception("Üye adı 100 karakterden uzun olamaz!");

            if (string.IsNullOrWhiteSpace(teamMember.Role))
                throw new Exception("Üye pozisyonu boş olamaz!");

            if (teamMember.Role.Length > 100)
                throw new Exception("Pozisyon 100 karakterden uzun olamaz!");

            // Örneğin sosyal medya linki varsa minimum mantık kontrolü
            if (!string.IsNullOrWhiteSpace(teamMember.TwitterUrl) &&
                !teamMember.TwitterUrl.StartsWith("https://"))
                throw new Exception("Instagram URL geçerli formatta olmalıdır!");
        }
    }
}
