using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using WebApi.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApi.Controllers
{
   //[Route("api/values")]

    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet("api/values/story")]
        public ActionResult<String> GetStory()
        {
            //read Story.txt File
            try
            {

                string story = System.IO.File.ReadAllText("./Files/Story.txt");
                return Ok(story);
            }catch(Exception e)
            {
                Console.Write("Story File Not Found...!");
                return NotFound();
            }
        }

        
        [HttpGet("api/values/story/level/{id}")]
        public ActionResult<string> Get(int id)
        {
            try
            {
                String story = System.IO.File.ReadAllText("./Files/Level" + id + ".txt");
                return Ok(story);
            }
            catch (Exception e)
            {
                Console.Write("Level Not Found!");
                return NotFound();
            }
        }

        [HttpGet]
        [Route("api/values/user/{idpwd}")]
        public IActionResult GetUser(String idpwd)
        {
            string id = idpwd.Split(":")[0];
            string pwd = idpwd.Split(":")[1];
            if (System.IO.File.Exists("./Files/Users/" + id+ ".json"))
            {
                using (System.IO.StreamReader r = new System.IO.StreamReader("./Files/Users/" + id + ".json"))
                {
                    string json = r.ReadToEnd();
                    User u = JsonConvert.DeserializeObject<User>(json);
                    if (u.userId.Equals(id) && u.password.Equals(pwd))
                    {
                        return Ok(u);
                    }
                    else
                    {
                        return null;
                    }
                }
                //var data = JObject.Parse(id);

            }
            else
            {
                return null;
            }
        }


        [HttpPost("api/values/user/{id}")]
        public IActionResult Post([FromBody] User user)
        {
            //User u = new User();
            
            if (System.IO.File.Exists("./Files/Users/" + user.userId + ".json"))
            {
                return Conflict();
            }
            else
            {
                using (StreamWriter sw = System.IO.File.CreateText("./Files/Users/"+user.userId+".json"))
                {
                    JsonSerializer js = new JsonSerializer();
                    js.Serialize(sw, user);    
                    
                }
                return Ok(user);
            }
        }

        // PUT api/values/5
        [HttpPut("api/values/user/{id}")]
        public IActionResult Put(String id, [FromBody] User user)
        {
            using (StreamWriter sw = System.IO.File.CreateText("./Files/Users/" + id + ".json"))
            {
                JsonSerializer js = new JsonSerializer();
                js.Serialize(sw, user);

            }
            return Ok(user);

        }
        [HttpPost]
        [Route("api/values/story/{monster}")]
        public int power(int monster)
        {
            if (monster != 0)
            {
                monster = monster - 10;
            }
            return monster;
        }

    }
}
