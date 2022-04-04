using Microsoft.AspNetCore.Mvc;



namespace Unihelp
{
    
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductController:ControllerBase
    {
        private readonly DbService _dbService;

        public ProductController(DbService service) => _dbService = service;

        
        [HttpGet]

        public Task<List<Schemas.Product>>  Get()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Headers.Add("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
            Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            return _dbService.GetProductsAsync();
        }
        
        
        [HttpPost]  

        public IActionResult Post(Schemas.Product product)

        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Headers.Add("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
            Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            Console.WriteLine("ereuifgeuvoerb2d");
            
            _dbService.CreateAsync(product);
            
            return Ok();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Schemas.Product>> Get(string id)
        {
            
            var data = await _dbService.GetProductAsync(id);

            if (data == null)
            {
                return NotFound();
            }
            return data;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Schemas.Product product,string id)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Headers.Add("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
            Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            var data = await _dbService.GetProductAsync(id);

            if (data == null)
            {
                return NotFound();
            }
            product.Id = data.Id;
            await _dbService.UpdateAsync(id, product);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)

        {
            
            var data =  _dbService.GetProductAsync(id);

            if (data == null)
            {
                return NotFound();
            }
            _dbService.DeleteAsync(id);   
            return Ok(data);
        }
    }
}
