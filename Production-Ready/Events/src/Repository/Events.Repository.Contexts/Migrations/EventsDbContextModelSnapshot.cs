﻿using System;
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
                    b.Property<int>("EventId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<bool>("Canceled");

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

                    b.Property<int>("UserId");

                    b.HasKey("EventId");

                    b.HasIndex("SportTypeId");

                    b.HasIndex("UserId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("Events.Repository.Pocos.SportType", b =>
                {
                    b.Property<int>("SportTypeId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("SportTypeId");

                    b.ToTable("SportTypes");
                });

            modelBuilder.Entity("Events.Repository.Pocos.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("UserName");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Events.Repository.Pocos.Voter", b =>
                {
                    b.Property<int>("VoterId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EventId");

                    b.Property<int>("UserId");

                    b.HasKey("VoterId");

                    b.HasIndex("EventId");

                    b.HasIndex("UserId");

                    b.ToTable("Voters");
                });

            modelBuilder.Entity("Events.Repository.Pocos.Event", b =>
                {
                    b.HasOne("Events.Repository.Pocos.SportType", "SportType")
                        .WithMany("Events")
                        .HasForeignKey("SportTypeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Events.Repository.Pocos.User", "User")
                        .WithMany("Events")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Events.Repository.Pocos.Voter", b =>
                {
                    b.HasOne("Events.Repository.Pocos.Event", "Event")
                        .WithMany("Voters")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Events.Repository.Pocos.User", "User")
                        .WithMany("Voters")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
