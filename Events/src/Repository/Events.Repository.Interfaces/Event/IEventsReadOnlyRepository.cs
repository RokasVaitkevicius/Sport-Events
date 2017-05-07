﻿using System.Threading.Tasks;
using EventPoco = Events.Repository.Pocos.Event;

namespace Events.Repository.Event
{
    public interface IEventsReadOnlyRepository
    {
        Task<EventPoco[]> GetAllEvents();

        Task<EventPoco> GetEventById(int id);
    }
}