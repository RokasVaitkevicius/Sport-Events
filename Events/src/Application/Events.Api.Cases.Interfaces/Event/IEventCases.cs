using System.Threading.Tasks;
using Events.Api.Dto.Events;

namespace Events.Api.Cases.Event
{
    public interface IEventCases : IEventReadOnlyCases
    {
        Task CreateEvent(NewEvent newEvent);
    }
}