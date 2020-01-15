using System;

using System.Collections.Generic;

namespace ShoppingCart.Shared.Models
{
    public partial class Orders
    {
        public string UserId { get; set; }
        public string Product { get; set; }
        public int Quantity { get; set; }
        public long OrderId { get; set; }
        public decimal Price { get; set; }
        public string OrderStatus { get; set; }
        
        public Orders()
        {
            Random rand = new Random();
            OrderId = rand.Next(0, Int32.MaxValue);
        }
    }
}
