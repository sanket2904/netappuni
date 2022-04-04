using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Unihelp.Controllers
{
    
    [ApiController]
    [Route("/api/[controller]")]
    public class BundleController : Controller
    {
        // GET: api/<BundleController>
        private readonly DbService _dbService;
        public BundleController(DbService service) => _dbService = service; 
        
        [HttpGet]
        public Task<List<Schemas.Bundles>> Get()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Headers.Add("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
            Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            return  _dbService.GetBundlesAsync();
        }

        // GET api/<BundleController>/5
        [HttpGet("{id}")]
        public Task<List<Schemas.Bundles>> Get(string id)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Headers.Add("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
            Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            return _dbService.GetBundlesAsync(id);
        }

        // POST api/<BundleController>
        [HttpPost]
        public Task Post(Schemas.Bundles bundles)
        {


            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Headers.Add("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
            Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

            return _dbService.CreateBundlesAsync(bundles);
            
        }

        // PUT api/<BundleController>/5
        [HttpPut("{id}")]
        public Task Put(string id, Schemas.Bundles bundles)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Headers.Add("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
            Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            return _dbService.UpdateBundlesAsync(id, bundles);
        }

        // DELETE api/<BundleController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            
           
            _dbService.DeleteBundlesAsync(id);
            return Delete(id);
        }
    }
}
