using System.Threading.Tasks;
using UserPoco = Events.Repository.Pocos.User;

namespace Events.Repository.User
{
    public interface IUserRepository : IUserReadOnlyRepository
    {
        Task<int> CreateUser(UserPoco newUser);

        Task UpdateUser(int userId, UserPoco updatedUser);
    }
}