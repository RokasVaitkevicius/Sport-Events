using AutoMapper;
using Events.Api.Dto.Users;
using Events.Domain.Factories.User;
using Events.Repository.User;
using System.Linq;
using System.Threading.Tasks;
using UserDto = Events.Api.Dto.Users.User;
using UserPoco = Events.Repository.Pocos.User;

namespace Events.Api.Cases.Users
{
    public class UserCases : IUserCases
    {
        private readonly IUserFactory _factory;

        private readonly IUserRepository _repository;

        private readonly IMapper _mapper;

        public UserCases(IUserFactory factory, IUserRepository repository, IMapper mapper)
        {
            _factory = factory;
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<UserDto> GetUserByUserId(int id)
        {
            var userPoco = await _repository.GetUserByUserId(id);

            return _mapper.Map<UserPoco, UserDto>(userPoco);
        }

        public async Task<UserDto[]> GetAllUsers()
        {
            var userPocos = await _repository.GetAllUsers();

            return userPocos.Select(userPoco => _mapper.Map<UserPoco, UserDto>(userPoco)).ToArray();
        }

        public async Task<bool> DoesUserByEmailAndUsernameExist(UserUsernameAndEmail userInfo)
        {
            return await _repository.DoesUserByEmailAndUsernameExist(userInfo.Email, userInfo.Username);
        }

        public async Task<UserDto> GetUserByEmailAndPassword(UserPasswordAndEmail userInfo)
        {
            var userPoco = await _repository.GetUserByEmailAndPassword(userInfo.Email, userInfo.Password);

            return _mapper.Map<UserPoco, UserDto>(userPoco);
        }

        public async Task<int> CreateUser(NewUser newUser)
        {
            return await _factory.CreateUser(newUser);
        }

        public async Task UpdateUser(int userId, UserUpdate updatedUser)
        {
            await _factory.CreateUpdatedUser(userId, updatedUser);
        }
    }
}