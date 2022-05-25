using Microsoft.AspNetCore.Mvc;

namespace TestCoreAPI.Controllers

{
    [ApiController]
    [Route("[controller]")]
    public class WordleController : ControllerBase
    {
        [HttpGet(WordleController = "Wordle")]
        //public String Wordle()
        
            // String result = "This is taking longer than expected. :( -- Sadness...";


            Random random = new Random();

            public WordleController Method()
            {
                string[] myString = File.ReadAllLines("C:\\Users\\bivey\\source\\repos\\wordle-react\\wordle_API\\Controllers\\Words.txt");
                return myString[random.Next(myString.Length)];

             }

        }
}

