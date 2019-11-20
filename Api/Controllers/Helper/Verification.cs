using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers.Helper
{
    public class Verification
    {
        public static bool IsIdCorrect(int? id)
        {
            if (id != null && id > 0)
                return true;
            return false;
        }

        public static bool IsObjectNull(object obj)
        {
            return obj == null;
        }

        public static int VerifyIdOrNull(int? id)
        {
            if (id == null)
                return 0;
            return (int)id;
        }
    }
}
