using Events.Repository.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using EventPoco = Events.Repository.Pocos.Event;

namespace Events.Repository.Event
{
    public class EventRepository : IEventsRepository
    {
        private EventsDbContext _db;

        public EventRepository(EventsDbContext db)
        {
            _db = db;
        }

        public async Task<EventPoco[]> GetAllEvents()
        {
            return await _db.Events.Select(e => e).Include(v => v.Voters).ToArrayAsync();
        }

        public async Task<EventPoco> GetEventById(int id)
        {
            return await _db.Events.SingleOrDefaultAsync(e => e.EventId == id);
        }

        public async Task CreateEvent(EventPoco newEvent)
        {
            await _db.Events.AddAsync(newEvent);

            await _db.SaveChangesAsync();
        }
    }
}