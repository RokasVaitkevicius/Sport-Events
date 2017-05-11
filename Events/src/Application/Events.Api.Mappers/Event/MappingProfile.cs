﻿using AutoMapper;
using Events.Api.Dto.Voters;
using Events.Constants.Constants;
using Events.Repository.Pocos;
using EventDto = Events.Api.Dto.Events.Event;
using EventPoco = Events.Repository.Pocos.Event;

namespace Events.Api.Mappers.Event
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Voters, Voter>();

            CreateMap<EventPoco, EventDto>()
                .ForMember(e => e.Location, o => o.ResolveUsing(fa => new Location
                {
                    Address = fa.Address,
                    City = fa.City,
                    Country = fa.Country
                }))
                .ForMember(e => e.Voters, o => o.MapFrom(a => a.Voters)                 
                );
            
        }
    }
}