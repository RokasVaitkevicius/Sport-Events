using System;

namespace Events.Api.Dto.Events
{
    public class Event
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime EventDate { get; set; }

        public string TimeFrom { get; set; }

        public string TimeTill { get; set; }

        public double Price { get; set; }

        public string PhoneNumber { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string Description { get; set; }

        public string FacebookEventUrl { get; set; }

        public string ImageUrl { get; set; }

        public DateTime DateUpdated { get; set; }

        public int AuthorId { get; set; }

        public int SportTypeId { get; set; }
    }
}