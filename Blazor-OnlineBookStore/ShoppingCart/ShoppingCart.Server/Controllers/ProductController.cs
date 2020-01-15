using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingCart.Shared.Models;

namespace ShoppingCart.Server.Controllers
{
    [Route("api/Product")]
    [ApiController]
    public class ProductController : Controller
    {
        //DataAccessLayer dal = new DataAccessLayer();
        private readonly webdevContext _context;

        public ProductController(webdevContext context)
        {
            _context = context;
        }

        [HttpGet]
        //[Route("api/Product/")]
        public IEnumerable<Products> GetProduct()
        {
            return _context.Products;
            //return dal.GetAllProduct();
        }


        [HttpGet("/Name/{id}")]
        public async Task<IActionResult> GetProductsByName([FromRoute] String s)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prods = await _context.Products.Where(a => a.Name.Contains(s)).ToArrayAsync();

            if (prods == null)
            {
                return NotFound();
            }

            return Ok(prods);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> ProductDetails([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var products = await _context.Products.FindAsync(id);

            if (products == null)
            {
                return NotFound();
            }

            return Ok(products);
            //return dal.GetProductData(id);
        }

        // POST: api/Users
        [HttpPost]
        public async Task<IActionResult> PostProduct([FromBody] Products products)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Products.Add(products);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProductExists(products.Id))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProduct", new { id = products.Id }, products);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct([FromRoute] long id, [FromBody] Products products)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != products.Id)
            {
                return BadRequest();
            }

            _context.Entry(products).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var products = await _context.Products.FindAsync(id);
            if (products == null)
            {
                return NotFound();
            }

            _context.Products.Remove(products);
            await _context.SaveChangesAsync();

            return Ok(products);
        }

        private bool ProductExists(long id)
        {
            return _context.Products.Any(e => e.Id == id);
        }

    }
}