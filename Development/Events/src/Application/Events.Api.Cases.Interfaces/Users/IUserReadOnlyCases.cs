using System.Threading.Tasks;
using Events.Api.Dto.Users;
using UserDto = Events.Api.Dto.Users.User;

namespace Events.Api.Cases.Users
{
    public interface IUserReadOnlyCases
    {
        Task<UserDto> GetUserByUserId(int id);

        Task<UserDto[]> GetAllUsers();

        Task<bool> DoesUserByEmailAndUsernameExist(UserUsernameAndEmail userInfo);

        Task<UserDto> GetUserByEmailAndPassword(UserPasswordAndEmail userInfo);
    }
}