using Api.Controllers.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Controllers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class DevController : BaseController
    {
        [HttpGet("logs")]
        public ContentResult Logs()
        {
            try
            {

                Logger.LogMessage("Showing Logs...");
            
                return new ContentResult
                {                
                    ContentType = "text/html",
                    Content = "<meta charset=\"ASCII \">" + Logger.GetLogs(),                
                };
            }
            catch (Exception e)
            {
                return new ContentResult
                {
                    ContentType = "text/html",
                    Content = e.Message,
                };
            }
        }
    }
}
