using Events.Api.Cases.Voter;
using Events.Api.Dto.Voters;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Events.Api.Controllers.Voter
{
    [Route("api/voter")]
    public class VoterController : Controller
    {
        private readonly IVoterCases _cases;

        public VoterController(IVoterCases cases)
        {
            _cases = cases;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> Add([FromBody] NewVoter newVoter)
        {
            await _cases.CreateVoter(newVoter);

            return Ok();
        }

        [HttpDelete]
        [Route("{eventId:int}/{userId:int}")]
        public async Task<IActionResult> Delete([FromRoute] int eventId, [FromRoute] int userId)
        {
            await _cases.DeleteVoter(eventId, userId);

            return Ok();
        }
    }
}