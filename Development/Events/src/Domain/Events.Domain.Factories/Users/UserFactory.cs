using Events.Api.Dto.Users;
using Events.Domain.Factories.User;
using Events.Repository.User;
using System.Threading.Tasks;
using UserPoco = Events.Repository.Pocos.User;

namespace Events.Domain.Factories.Users
{
    public class UserFactory : IUserFactory
    {
        private readonly IUserRepository _repository;

        public UserFactory(IUserRepository repository)
        {
            _repository = repository;
        }

        public async Task CreateUser(NewUser newUser)
        {
            var userPoco = new UserPoco
            {
                Email = newUser.Email,
                FirstName = newUser.FirstName,
                LastName = newUser.LastName,
                Password = newUser.Password,
                UserName = newUser.UserName
            };

            await _repository.CreateUser(userPoco);
        }

        public async Task CreateUpdatedUser(int userId, UserUpdate updateUser)
        {
            var updatedUser = new UserPoco
            {
                FirstName = updateUser.FirstName,
                LastName = updateUser.LastName
            };

            await _repository.UpdateUser(userId, updatedUser);
        }
    }
}