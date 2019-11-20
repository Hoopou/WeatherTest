using Api.Controllers.Controllers.Error;
using Api.Controllers.Helper;
using Api.Models;
using Api.Settings;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Reflection;
using System.Threading.Tasks;

namespace Api.Controllers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class WeatherController : BaseController
    {
        private ApplicationSettings _appSettings;
        public WeatherController(IOptions<ApplicationSettings> appSettings)
        {
            this._appSettings = appSettings.Value;
        }

        [HttpGet]
        public ActionResult<WeatherData> Get()
        {
            Logger.LogMessage("L'utilisateur demande la liste des températures");
            WeatherData weatherData = null;
            try
            {
            Logger.LogMessage("Trying to read file", true);

            using (StreamReader r = new StreamReader(this._appSettings.FilePath))
            {
                var json = r.ReadToEnd();
                weatherData = WeatherData.FromJson(json);
            }

            }catch(Exception e)
            {
                Logger.LogError("Cannot read file", true);
                return BadRequest(new CustomError() { Error_number = 1002, Message = "Cannot read file" });
            }

            //verification si le fichier est vide ou pas
            if(weatherData == null || weatherData == new WeatherData())
            {
                Logger.LogWarning("File was empty");
                return BadRequest(new CustomError() { Error_number = 1003, Message = "Json file was empty" });
            }
            else
            {
                return Ok(weatherData);
            }
        }

        [HttpPost]
        public ActionResult<string> Add()
        {            
            Logger.LogMessage("L'utilisateur tente d'ajouter un employe");
            Logger.LogError("\t \t ╚L'employe a un prenom vide ");
            return BadRequest(new CustomError() { Error_number = 1002, Message = "Cannot have no name" });
        }
    }
}
