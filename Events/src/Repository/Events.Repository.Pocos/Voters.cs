using System.ComponentModel.DataAnnotations;

namespace Events.Repository.Pocos
{
    public class Voters
    {
        [Key]
        public int VoterId { get; set; }

        #region Dependencies

        public int EventId { get; set; }

        public Event Event { get; set; }

        #endregion

    }
}