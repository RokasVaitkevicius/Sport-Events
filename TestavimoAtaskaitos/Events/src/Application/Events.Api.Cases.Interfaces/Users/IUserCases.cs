﻿using Events.Api.Dto.Users;
using System.Threading.Tasks;

namespace Events.Api.Cases.Users
{
    public interface IUserCases : IUserReadOnlyCases
    {
        Task<int> CreateUser(NewUser newUser);

        Task UpdateUser(int userId, UserUpdate updatedUser);
    }
}