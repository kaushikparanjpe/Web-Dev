using Microsoft.EntityFrameworkCore;
using ShoppingCart.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Server.DataAccess
{
    public class DataAccessLayer
    {
        DatabaseContext db = new DatabaseContext();
        //To Get all employees details   
        public IEnumerable<Products> GetAllProduct()
        {
            try
            {
                return db.products.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new employee record     
        public void AddProduct(Products p)
        {
            try
            {
                db.products.Add(p);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar employee    
        public void UpdateProduct(Products p)
        {
            try
            {
                db.Entry(p).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular employee    
        public Products GetProductData(int id)
        {
            try
            {
                Products p = db.products.Find(id);
                return p;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular employee    
        public void DeleteProduct(int id)
        {
            try
            {
                Products p = db.products.Find(id);
                db.products.Remove(p);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

    }
}
