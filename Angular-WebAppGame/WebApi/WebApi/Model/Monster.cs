using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class Monster
    {
        public Monster()
        {

        }
        public Monster(int power){
            this.power = power;
        }
        public int power
        {
            get;
            set;
        }
    }

}
