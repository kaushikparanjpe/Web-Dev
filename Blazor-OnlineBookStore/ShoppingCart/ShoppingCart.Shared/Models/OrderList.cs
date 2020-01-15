using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingCart.Shared.Models
{
    public static class OrderList
    {
        public static List<Orders> cartItems { get; set; } = new List<Orders>();
        

    }
}
