using ShoppingCart.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Server.DataAccess
{
    public class UserDataAccessLayer
    {
        DatabaseContext db = new DatabaseContext();
        public Users GetUserData(String id)
        {
            try
            {
                Users u = db.Users.Find(id);
                return u;
            }
            catch
            {
                throw;
            }

        }
    }
}
