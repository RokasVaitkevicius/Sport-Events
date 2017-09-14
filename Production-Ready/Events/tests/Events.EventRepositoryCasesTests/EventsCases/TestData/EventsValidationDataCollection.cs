using Events.Api.Dto.Events;
using Events.Api.Dto.Users;
using Events.Constants.Constants;
using System;
using System.Collections.Generic;

namespace Events.EventRepositoryCasesTests.EventsCases.TestData
{
    public class EventsValidationDataCollection
    {
        public EventsValidationDataCollection(IEnumerable<Tuple<NewUser, NewEvent>> data)
        {
            Create("username", "email", "firstname", "latname", "paswrd", "Event", DateTime.Now, "10", "12", 12.05, 
                "8666566", "street", "city", "country", "description", "https://fb", "http://image", 1, 1);
        }

        private static Tuple<NewUser, NewEvent> Create(string username, string email, string firstName, string lastName, string password,
            string name, DateTime eventDate, string timeFrom, string timeTill, double price, string phoneNumber, string address,
            string city, string country, string description, string facebookEventUrl, string imageUrl, int userId, int sportTypeId)
        {
            return new Tuple<NewUser, NewEvent>(
                new NewUser
                {
                    UserName = username,
                    Email = email,
                    FirstName = firstName,
                    LastName = lastName,
                    Password = password
                }, 
                new NewEvent
            {
                Name = name,
                EventDate = eventDate,
                TimeFrom = timeFrom,
                TimeTill = timeTill,
                Price = price,
                PhoneNumber = phoneNumber,
                Location = new Location
                {
                    Address = address,
                    City = city,
                    Country = country
                },
                Description = description,
                FacebookEventUrl = facebookEventUrl,
                ImageUrl = imageUrl,
                UserId = userId,
                SportTypeId = sportTypeId
            });
        }
    }
}