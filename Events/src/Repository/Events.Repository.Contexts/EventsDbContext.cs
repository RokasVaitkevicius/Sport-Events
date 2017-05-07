﻿using Events.Repository.Pocos;
using Microsoft.EntityFrameworkCore;

namespace Events.Repository.Contexts
{
    // Command to add migration: dotnet ef --startup-project ../Events.Repository.Startup/ migrations add Initial
    public class EventsDbContext : DbContext
    {
        public DbSet<Event> Events { get; set; }

        public DbSet<SportType> SportTypes { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Voters> Voters { get; set; }

        public EventsDbContext(DbContextOptions<EventsDbContext> options) :
            base(options)
        {
            Database.Migrate();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Event>()
                .HasOne(e => e.Author)
                .WithMany(a => a.Events)
                .HasForeignKey(e => e.AuthorId)
                .IsRequired();

            modelBuilder.Entity<Event>()
                .HasOne(e => e.SportType)
                .WithMany(st => st.Events)
                .HasForeignKey(e => e.SportTypeId)
                .IsRequired();

            modelBuilder.Entity<Voters>()
                .HasOne(v => v.Event)
                .WithMany(e => e.Voters)
                .HasForeignKey(e => e.EventId)
                .IsRequired();
        }
    }
}