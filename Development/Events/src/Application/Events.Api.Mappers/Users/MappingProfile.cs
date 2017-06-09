using AutoMapper;
using UserDto = Events.Api.Dto.Users.User;
using UserPoco = Events.Repository.Pocos.User;

namespace Events.Api.Mappers.Users
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserPoco, UserDto>();
        }
    }
}