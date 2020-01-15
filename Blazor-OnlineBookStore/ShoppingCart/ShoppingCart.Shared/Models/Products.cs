using System;
using System.Collections.Generic;

namespace ShoppingCart.Shared.Models
{
    public partial class Products
    {
        public long Id { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
    }
}
