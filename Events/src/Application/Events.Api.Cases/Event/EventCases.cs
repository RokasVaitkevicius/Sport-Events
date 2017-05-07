using System;
using System.Threading.Tasks;
using Events.Api.Dto.Events;
using Events.Domain.Factories.Event;
using Events.Repository.Event;
//using EventDto = Events.Api.Dto.Events.Event;
using EventPoco = Events.Repository.Pocos.Event;


namespace Events.Api.Cases.Event
{
    public class EventCases : IEventCases
    {
        private IEventsRepository _repository;

        private IEventFactory _eventFactory;

        public EventCases(IEventsRepository repository, IEventFactory eventFactory)
        {
            _repository = repository;
            _eventFactory = eventFactory;
        }

        public async Task<EventPoco[]> GetAllEvents()
        {
            return await _repository.GetAllEvents();
        }

        public async Task<EventPoco> GetEventById(int id)
        {
            return await _repository.GetEventById(id);
        }

        public async Task CreateEvent(NewEvent newEvent)
        {
            await _eventFactory.CreateEvent(newEvent);
        }
    }
}