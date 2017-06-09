using System.ComponentModel.DataAnnotations;

namespace Events.Repository.Pocos
{
    public class Voter
    {
        [Key]
        public int VoterId { get; set; }

        #region Dependencies

        public int EventId { get; set; }

        public Event Event { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        #endregion

    }
}