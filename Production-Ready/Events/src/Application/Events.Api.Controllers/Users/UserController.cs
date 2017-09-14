using Events.Api.Cases.Users;
using Events.Api.Controllers.Helpers;
using Events.Api.Dto.Users;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using UserDto = Events.Api.Dto.Users.User;

namespace Events.Api.Controllers.Users
{
    [Route("api/user")]
    public class UserController : Controller
    {
        private readonly IUserCases _cases;

        public UserController(IUserCases cases)
        {
            _cases = cases;
        }

        [HttpGet]
        [Route("all", Name = nameof(RouteNames.GetAllUsers))]
        public async Task<UserDto[]> GetAllUsers()
        {
            return await _cases.GetAllUsers();
        }

        [HttpGet]
        [Route("{userId:int}", Name = nameof(RouteNames.GetUserByUserId))]
        [Produces(typeof(UserDto))]
        public async Task<UserDto> GetUserByUserId([FromRoute]int userId)
        {
            return await _cases.GetUserByUserId(userId);
        }

        [HttpPost]
        [Route("exists")]
        public async Task<bool> DoesUserWithEmailAndUsernameExists([FromBody]UserUsernameAndEmail userInfo)
        {
            return await _cases.DoesUserByEmailAndUsernameExist(userInfo);
        }

        [HttpPost]
        [Route("login", Name = nameof(RouteNames.GetUserByEmailAndPassword))]
        [Produces(typeof(UserDto))]
        public async Task<UserDto> GetUserByUserId([FromBody]UserPasswordAndEmail userInfo)
        {
            return await _cases.GetUserByEmailAndPassword(userInfo);
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> Add([FromBody] NewUser newUser)
        {
            var userId = await _cases.CreateUser(newUser);

            var uri = new Uri(Url.Link(nameof(RouteNames.GetUserByUserId), new {userId = userId}));

            return Created(uri, null);
        }

        [HttpPut]
        [Route("{userId:int}")]
        public async Task<IActionResult> UpdateUser([FromRoute] int userId, [FromBody] UserUpdate userUpdate)
        {
            await _cases.UpdateUser(userId, userUpdate);

            return Ok();
        }
    }
}