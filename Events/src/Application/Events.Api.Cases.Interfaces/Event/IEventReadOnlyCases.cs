using System.Threading.Tasks;
//using EventDto = Events.Api.Dto.Events.Event;
using EventPoco = Events.Repository.Pocos.Event;

namespace Events.Api.Cases.Event
{
    public interface IEventReadOnlyCases
    {
        Task<EventPoco[]> GetAllEvents();

        Task<EventPoco> GetEventById(int id);
    }
}