using System.Threading.Tasks;

namespace Events.Repository.Event
{
    public interface IEventsReadOnlyRepository
    {
        Task<Pocos.Event[]> GetAllEvents();

        Task<Pocos.Event> GetEventById(int id);
    }
}