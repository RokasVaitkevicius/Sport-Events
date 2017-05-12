using Events.Repository.Pocos;
using Microsoft.EntityFrameworkCore;

namespace Events.Repository.Contexts
{
    // Command to add migration: dotnet ef --startup-project ../Events.Repository.Startup/ migrations add Initial
    public class EventsDbContext : DbContext
    {
        public DbSet<Event> Events { get; set; }

        public DbSet<SportType> SportTypes { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Voter> Voters { get; set; }

        public EventsDbContext(DbContextOptions<EventsDbContext> options) :
            base(options)
        {
            Database.Migrate();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Event>()
                .HasOne(e => e.User)
                .WithMany(a => a.Events)
                .HasForeignKey(e => e.UserId)
                .IsRequired();

            modelBuilder.Entity<Event>()
                .HasOne(e => e.SportType)
                .WithMany(st => st.Events)
                .HasForeignKey(e => e.SportTypeId)
                .IsRequired();

            modelBuilder.Entity<Voter>()
                .HasOne(v => v.Event)
                .WithMany(e => e.Voters)
                .HasForeignKey(e => e.EventId)
                .IsRequired();

            modelBuilder.Entity<Voter>()
                .HasOne(v => v.User)
                .WithMany(e => e.Voters)
                .HasForeignKey(e => e.UserId)
                .IsRequired();
        }
    }
}