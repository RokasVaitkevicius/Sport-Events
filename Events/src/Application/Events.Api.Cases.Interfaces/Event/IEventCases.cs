using Events.Api.Dto.Events;
using System.Threading.Tasks;

namespace Events.Api.Cases.Event
{
    public interface IEventCases : IEventReadOnlyCases
    {
        Task CreateEvent(NewEvent newEvent);
    }
}