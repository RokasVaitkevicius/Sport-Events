using System.Threading.Tasks;
using EventDto = Events.Api.Dto.Events.Event;

namespace Events.Api.Cases.Event
{
    public interface IEventReadOnlyCases
    {
        Task<EventDto[]> GetAllEvents();

        Task<EventDto> GetEventById(int id);
    }
}