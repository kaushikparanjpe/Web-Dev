using Microsoft.EntityFrameworkCore;
using ShoppingCart.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Server.DataAccess
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Products> products { get; set; }
        public DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                //optionsBuilder.UseSqlServer(@"Server=LAPTOP-NTFTP9MB; database=webdev; Trusted_Connection=True;");
                optionsBuilder.UseSqlServer("Server= DESKTOP-U5C8CEG;Database=webdev;" +
                            "user id=info7370;password=root;Trusted_Connection=True;" +
                            "MultipleActiveResultSets=true");
            }

        }

    }
}
