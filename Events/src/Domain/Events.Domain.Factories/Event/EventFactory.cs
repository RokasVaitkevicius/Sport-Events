using System;
using System.Threading.Tasks;
using Events.Api.Dto.Events;
using Events.Repository.Event;

namespace Events.Domain.Factories.Event
{
    public class EventFactory : IEventFactory
    {
        private IEventsRepository _repository;

        public EventFactory(IEventsRepository repository)
        {
            _repository = repository;
        }

        public async Task CreateEvent(NewEvent newEvent)
        {
            var eventPoco = new Repository.Pocos.Event
            {
                Name = newEvent.Name,
                EventDate = newEvent.EventDate,
                TimeFrom = newEvent.TimeFrom,
                TimeTill = newEvent.TimeTill,
                Price = newEvent.Price,
                PhoneNumber = newEvent.PhoneNumber,
                Address = newEvent.Address,
                City = newEvent.City,
                Country = newEvent.Country,
                Description = newEvent.Description,
                FacebookEventUrl = newEvent.FacebookEventUrl,
                ImageUrl = newEvent.ImageUrl,
                DateUpdated = DateTime.Now,
                AuthorId = newEvent.AuthorId,
                SportTypeId = newEvent.SportTypeId
            };

            await _repository.CreateEvent(eventPoco);
        }
    }
}