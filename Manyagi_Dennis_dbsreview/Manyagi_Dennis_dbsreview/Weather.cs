using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manyagi_Dennis_dbsreview
{
    class Weather
    {

        string _city;

        DateTime _latestDate;

        double _temp;


        double _pressure = 0;


        double _humidity;

        public override string ToString()
        {
            string all = $"City: {_city}\nTemperature: {_temp}\nPressure: {_pressure}\nHumidity: {_humidity}\nLatest Date: {_latestDate}";


            return all;
        }

        //properties
        public DateTime MyDate { get { return _latestDate; } set { _latestDate = value; } }

        public string MyCity { get { return _city; } set { _city = value; } }

        public double MyPressure { get { return _pressure; } set { _pressure = value; } }

        public double MyTemp { get { return _temp; } set { _temp = value; } }

        public double MyHumidity { get { return _humidity; } set { _humidity = value; } }
    }
}
