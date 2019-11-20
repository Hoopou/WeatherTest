using Api.Controllers.Controllers.Error;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers.Controllers.Error
{
    public static class GeneralErrors
    {        
        public static readonly CustomError ERROR_USERNAME_OR_PASSWORD_INCORRECT = new CustomError() { Message = "User or password is incorrect.", Error_number = 9876 };
    }
}
