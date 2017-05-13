using Events.Api.Dto.Events;
using Events.Repository.Event;
using System;
using System.Threading.Tasks;

namespace Events.Domain.Factories.Event
{
    public class EventFactory : IEventFactory
    {
        private readonly IEventsRepository _repository;

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
                Address = newEvent.Location.Address,
                City = newEvent.Location.City,
                Country = newEvent.Location.Country,
                Description = newEvent.Description,
                FacebookEventUrl = newEvent.FacebookEventUrl,
                ImageUrl = newEvent.ImageUrl,
                DateUpdated = DateTime.Now,
                UserId = newEvent.UserId,
                SportTypeId = newEvent.SportTypeId
            };

            await _repository.CreateEvent(eventPoco);
        }
    }
}