using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Events.Repository.Contexts;

namespace Events.Repository.Contexts.Migrations
{
    [DbContext(typeof(EventsDbContext))]
    partial class EventsDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("Events.Repository.Pocos.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<int>("AuthorId");

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<DateTime>("DateUpdated");

                    b.Property<string>("Description");

                    b.Property<DateTime>("EventDate");

                    b.Property<string>("FacebookEventUrl");

                    b.Property<string>("ImageUrl");

                    b.Property<string>("Name");

                    b.Property<string>("PhoneNumber");

                    b.Property<double>("Price");

                    b.Property<int>("SportTypeId");

                    b.Property<string>("TimeFrom");

                    b.Property<string>("TimeTill");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("SportTypeId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("Events.Repository.Pocos.SportType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("SportTypes");
                });

            modelBuilder.Entity("Events.Repository.Pocos.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Events.Repository.Pocos.Event", b =>
                {
                    b.HasOne("Events.Repository.Pocos.User", "Author")
                        .WithMany("Events")
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Events.Repository.Pocos.SportType", "SportType")
                        .WithMany("Events")
                        .HasForeignKey("SportTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
