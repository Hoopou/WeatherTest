using Api.Controllers.Helper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Reflection;

namespace Api.Controllers
{
    public class BaseController: Controller
    {

        public Logger Logger { get; set; } = new Logger();
        public void AddCookie(string key, string value, int? expireTimeMinutes)
        {
            CookieOptions options = new CookieOptions();

            if (expireTimeMinutes.HasValue)
                options.Expires = DateTime.Now.AddMinutes(expireTimeMinutes.Value);

            Response.Cookies.Append(key, value);
        }

        public void AddCookie(object obj, int? expireTimeMinutes)
        {
            Type type = obj.GetType();
            var propreties = type.GetRuntimeProperties();
            foreach(var prop in propreties)
            {
                var value = obj.GetType().GetRuntimeProperty(prop.Name)?.GetValue(obj)?.ToString();
                if (value == null || string.IsNullOrEmpty(value))
                    continue;
                AddCookie(prop.Name, value, expireTimeMinutes);
            }
        }

        public void RemoveCookie(string key)
        {
            Response.Cookies.Delete(key);
        }

        public string GetCookie(string key)
        {
            return Request.Cookies[key];
        }


        public override void OnActionExecuting(ActionExecutingContext context)
        {
            //var token = GetCookie("token");
            //context.HttpContext.Request.Headers.TryGetValue("Authorization", out var token2);

            //if (token == null || token2.ToString() == null)
            //    context.Result = NotFound();
            //else
                base.OnActionExecuting(context);
        }
    }
}
