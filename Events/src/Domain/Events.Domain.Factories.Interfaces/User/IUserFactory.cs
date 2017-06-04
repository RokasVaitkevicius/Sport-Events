using Events.Api.Dto.Users;
using System.Threading.Tasks;

namespace Events.Domain.Factories.User
{
    public interface IUserFactory
    {
        Task CreateUser(NewUser newUser);

        Task CreateUpdatedUser(int userId, UserUpdate updateUser);
    }
}