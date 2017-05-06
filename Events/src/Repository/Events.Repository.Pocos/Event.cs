using Events.Constants.Constants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Events.Repository.Pocos
{
    public class Event
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime EventDate { get; set; }

        public string TimeFrom { get; set; }

        public string TimeTill { get; set; }

        public double Price { get; set; }

        public string PhoneNumber { get; set; }

        // TODO: research if it is possivle to use xomplex types in ef
        //public Location Location { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string Description { get; set; }

        public string FacebookEventUrl { get; set; }

        public string ImageUrl { get; set; }

        // Todo: Solve issue with storing list of voters
        //public Voter Voters { get; set; }

        #region Dependencies

        public DateTime DateUpdated { get; set; }

        public int AuthorId { get; set; }

        public User Author { get; set; }

        public int SportTypeId { get; set; }

        public SportType SportType { get; set; }

        #endregion
    }
}