using System.Collections.Generic;
using System.Linq;

namespace Events.Constants.Constants
{
    public class Voter
    {
        public ICollection<string> Voters { get; set; }

        public string VotersList
        {
            get { return string.Join(",", Voters); }
            set { Voters = value.Split(',').ToList(); }
        }
    }
}