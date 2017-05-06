using System.Threading.Tasks;
using EventPoco = Events.Repository.Pocos.Event;

namespace Events.Repository.Event
{
    public interface IEventsRepository : IEventsReadOnlyRepository
    {
        Task CreateEvent(EventPoco newEvent);
    }
}