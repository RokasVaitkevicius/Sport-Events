using System.Threading.Tasks;
using UserPoco = Events.Repository.Pocos.User;

namespace Events.Repository.User
{
    public interface IUserReadOnlyRepository
    {
        Task<UserPoco> GetUserByUserId(int id);

        Task<UserPoco[]> GetAllUsers();

        Task<bool> DoesUserByEmailAndUsernameExist(string email, string username);

        Task<UserPoco> GetUserByEmailAndPassword(string email, string password);
    }
}