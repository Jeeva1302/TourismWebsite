using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TourismWebsite.Models;

namespace TourismWebsite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelAgentsController : ControllerBase
    {
        private readonly TourismWebsiteContext _context;

        public TravelAgentsController(TourismWebsiteContext context)
        {
            _context = context;
        }

        // GET: api/TravelAgents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TravelAgent>>> GetTravelAgents()
        {
          if (_context.TravelAgents == null)
          {
              return NotFound();
          }
            return await _context.TravelAgents.ToListAsync();
        }

        // GET: api/TravelAgents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TravelAgent>> GetTravelAgent(int id)
        {
          if (_context.TravelAgents == null)
          {
              return NotFound();
          }
            var travelAgent = await _context.TravelAgents.FindAsync(id);

            if (travelAgent == null)
            {
                return NotFound();
            }

            return travelAgent;
        }

        // PUT: api/TravelAgents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTravelAgent(int id, TravelAgent travelAgent)
        {
            if (id != travelAgent.AgentId)
            {
                return BadRequest();
            }

            _context.Entry(travelAgent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TravelAgentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TravelAgents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TravelAgent>> PostTravelAgent(TravelAgent travelAgent)
        {
          if (_context.TravelAgents == null)
          {
              return Problem("Entity set 'TourismWebsiteContext.TravelAgents'  is null.");
          }
            _context.TravelAgents.Add(travelAgent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTravelAgent", new { id = travelAgent.AgentId }, travelAgent);
        }

        // DELETE: api/TravelAgents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTravelAgent(int id)
        {
            if (_context.TravelAgents == null)
            {
                return NotFound();
            }
            var travelAgent = await _context.TravelAgents.FindAsync(id);
            if (travelAgent == null)
            {
                return NotFound();
            }

            _context.TravelAgents.Remove(travelAgent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TravelAgentExists(int id)
        {
            return (_context.TravelAgents?.Any(e => e.AgentId == id)).GetValueOrDefault();
        }
    }
}
