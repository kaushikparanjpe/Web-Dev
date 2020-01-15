using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class User
    {
        public String userId { get; set; }
        public String password { get; set; }
        public int current_level { get; set; }

        public User(String userId,String password, int level)
        {
            this.userId = userId;
            this.password = password;
            current_level = level;
        }
    }
}
