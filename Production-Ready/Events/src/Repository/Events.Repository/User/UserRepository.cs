using Events.Repository.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using UserPoco = Events.Repository.Pocos.User;

namespace Events.Repository.User
{
    public class UserRepository : IUserRepository
    {
        private readonly EventsDbContext _db;

        public UserRepository(EventsDbContext db)
        {
            _db = db;
        }

        public async Task<UserPoco> GetUserByUserId(int id)
        {
            return await _db.Users.FirstOrDefaultAsync(u => u.UserId == id);
        }

        public async Task<UserPoco[]> GetAllUsers()
        {
            return await _db.Users.ToArrayAsync();
        }

        public async Task<bool> DoesUserByEmailAndUsernameExist(string email, string username)
        {
            bool userExists;

            var userByEmail = await  _db.Users.FirstOrDefaultAsync(u => u.Email == email);

            var userByUserName = await _db.Users.FirstOrDefaultAsync(u => u.UserName == username);

            if (userByUserName != null || userByEmail != null)
            {
                userExists = true;
            }
            else
            {
                userExists = false;
            }

            return userExists;
        }

        public async Task<UserPoco> GetUserByEmailAndPassword(string email, string password)
        {
            return await _db.Users.FirstOrDefaultAsync(u => u.Email == email && u.Password == password);
        }

        public async Task CreateUser(UserPoco newUser)
        {
            await _db.AddAsync(newUser);

            await _db.SaveChangesAsync();
        }

        public async Task UpdateUser(int userId, UserPoco updatedUser)
        {
            var oldUser = await _db.Users.FirstOrDefaultAsync(u => u.UserId == userId);

            oldUser.FirstName = updatedUser.FirstName;
            oldUser.LastName = updatedUser.LastName;

            _db.Users.Update(oldUser);

            await _db.SaveChangesAsync();
        }
    }
}