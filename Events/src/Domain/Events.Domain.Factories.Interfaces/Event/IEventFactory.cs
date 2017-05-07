using Events.Api.Dto.Events;
using System.Threading.Tasks;

namespace Events.Domain.Factories.Event
{
    public interface IEventFactory
    {
        Task CreateEvent(NewEvent newEvent);
    }
}