using System;
using System.Threading.Tasks;
using Events.Api.Cases.Event;
using Events.Api.Controllers.Helpers;
using Events.Api.Dto.Events;
using Microsoft.AspNetCore.Mvc;

namespace Events.Api.Controllers.Event
{
    [Route("api/events")]
    public class EventController : Controller
    {
        private readonly IEventCases _cases;

        public EventController(IEventCases cases)
        {
            _cases = cases;
        }

        [HttpGet]
        [Route("", Name = nameof(RouteNames.GetAllEvents))]
        public async Task<Repository.Pocos.Event[]> GetAll()
        {
            return await _cases.GetAllEvents();
        }

        [HttpGet]
        [Route("{id:int}", Name = nameof(RouteNames.GetEventById))]
        [Produces(typeof(Repository.Pocos.Event))]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            IActionResult result;

            var foundEvent = await _cases.GetEventById(id);

            if (foundEvent != null)
            {
                result = Ok(foundEvent);
            }
            else
            {
                result = NotFound();
            }

            return result;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> Add([FromBody] NewEvent newEvent)
        {
            await _cases.CreateEvent(newEvent);

            return Ok();
        }
    }
}