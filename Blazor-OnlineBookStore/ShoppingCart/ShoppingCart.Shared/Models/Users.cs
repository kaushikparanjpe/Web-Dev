using System;
using System.Collections.Generic;

namespace ShoppingCart.Shared.Models
{
    public partial class Users
    {
        public string UserId { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
