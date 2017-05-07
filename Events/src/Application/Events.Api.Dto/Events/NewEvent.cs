using System;
using System.ComponentModel.DataAnnotations;

namespace Events.Api.Dto.Events
{
    public class NewEvent
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime EventDate { get; set; }

        [Required]
        public string TimeFrom { get; set; }

        [Required]
        public string TimeTill { get; set; }

        [Required]
        public double Price { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string Description { get; set; }

        public string FacebookEventUrl { get; set; }

        public string ImageUrl { get; set; }

        [Required]
        public int AuthorId { get; set; }

        [Required]
        public int SportTypeId { get; set; }
    }
}