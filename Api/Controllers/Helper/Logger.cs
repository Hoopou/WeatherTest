using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Controllers.Helper
{
    public class Logger
    {
        private static List<Log> LoggList = new List<Log>();
        private readonly string TABULATION = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        public void LogMessage(string arg, bool indent = false)
        {
            LoggList.Add(
                new Log(LogType.Message, DateTime.Now + (indent ? TABULATION + " => " : " - ") + arg)
            );
            LogBuffer();
        }

        public void LogError(string arg, bool indent = false)
        {
            LoggList.Add(
                new Log(LogType.Error, DateTime.Now + (indent ? TABULATION + " =>" : " - ") + arg)
            );
            LogBuffer();
        }

        public void LogWarning(string arg, bool indent = false)
        {
            LoggList.Add(
                new Log(LogType.Warning, DateTime.Now + (indent ? TABULATION + " =>" : " - ") + arg)
            );
            LogBuffer();
        }

        public string GetLogs()
        {
            StringBuilder builder = new StringBuilder();
            LoggList.ForEach(delegate (Log log)
            {
                builder.AppendLine(log.GetLogAsHTML());
            });
            return builder.ToString();
        }

        private void LogBuffer()
        {
            if (LoggList.Count > 50)
            {
                LoggList.RemoveAt(0);
            }
        }
    }

    enum LogType
    {
        Message,
        Warning,
        Error
    }

    internal class Log{
        private string _Message { get; set; }
        private LogType _LogType { get; set; }
        public Log(LogType LogType, string Message)
        {
            _LogType = LogType;
            _Message = Message;
        }

        public string GetLogAsHTML(){
            switch (_LogType)
            {
                case LogType.Message:
                    return "<p>" + _Message + "</p>";
                case LogType.Warning:
                    return "<p style=\"color:yellow;\">" + _Message + "</p>";
                case LogType.Error:
                    return "<p style=\"color:red;\">" + _Message + "</p>";
                default:
                    return "<p>" + _Message + "</p>";
            }
        }
    }
}
