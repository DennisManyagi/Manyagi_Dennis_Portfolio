using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using MySql.Data.MySqlClient;
using System.IO;

namespace Manyagi_Dennis_dbsreview
{
    class Program
    {

        MySqlConnection _con = null;

        List<Weather> _allCityWeather = null;


        static void Main(string[] args)
        {
            

            //instantiate program sql variable
            Program instance = new Program();

            //hold all queries of weather in each city
            instance._allCityWeather = new List<Weather>();

            //loop 
            //menu

            bool truth = true;

            while (truth)
            {
                //prompt user
                Console.WriteLine("Hello Welcome to the weather program.\n1.Select a city\n2.Exit\n");

                string answer = Console.ReadLine().ToLower();

                switch (answer)
                {
                    case"1":
                    case "select a city":
                        {

                            Console.WriteLine("In what city would you like to see weather?");
                            string choice = Console.ReadLine().ToLower();

                            int num;

                            //check if user input is number or blank
                            while (Int32.TryParse(choice, out num) || string.IsNullOrWhiteSpace(choice))
                            {

                                Console.WriteLine("Please select an appropriate city.\nDo not use numbers or leave blank spaces.");

                                choice = Console.ReadLine().ToLower();
                            }


                            //instantiate program sql variable
                            instance._con = new MySqlConnection();

                            //call connect method
                            instance.Connect();



                            //pass string to retrieve information from database
                            DataTable data = instance.QueryDB($"select MAX(weather.createdDate) as latestDate, temp, pressure, humidity, city from weather where city in ('{choice}') group by city order by createdDate;");

                            //catch rows returned from database
                            DataRowCollection rows = data.Rows;
                            
                            //check if city exists
                            if (rows.Count <= 0)
                            {
                                Console.WriteLine("No Data Available for the selected city");
                            }

                            //display results of datatable
                            foreach (DataRow row in rows)
                            {

                                Console.WriteLine($"City: {(row["city"].ToString())}");
                                Console.WriteLine($"Temperature: {Convert.ToDouble(row["temp"].ToString())}");
                                Console.WriteLine($"Pressure: {double.Parse(row["pressure"].ToString())}");
                                Console.WriteLine($"Humidity: {double.Parse(row["humidity"].ToString())}");
                                Console.WriteLine($"Latest date: {DateTime.Parse(row["latestDate"].ToString())}");
                                Console.WriteLine();

                                //create and pass values of query to object
                                Weather cityWeather = new Weather();

                                cityWeather.MyCity = row["city"].ToString();
                                cityWeather.MyTemp = Convert.ToDouble(row["temp"].ToString());
                                cityWeather.MyPressure = double.Parse(row["pressure"].ToString());
                                cityWeather.MyHumidity = double.Parse(row["humidity"].ToString());
                                cityWeather.MyDate = DateTime.Parse(row["latestDate"].ToString());

                                //add new dvd item to inventory list
                                instance._allCityWeather.Add(cityWeather);

                               
                                

                            }





                            Console.WriteLine("\nPress a key to continue.");
                            Console.ReadKey();


                        }
                        break;

                    case "2":
                    case "exit": {

                            truth = false;

                        } break;
                }

                

            }
        }

        

        //connect to database with connection string
        void Connect()
        {
            //run connection string
            BuildConString();

            try
            {
                _con.Open();
                Console.WriteLine("Connection Successful!");
            }
            catch (MySqlException e)
            {

                string msg = "";

                switch (e.Number)
                {
                    case 0:
                        {

                            msg = e.ToString();
                        }
                        break;

                    case 1042:
                        {


                            msg = "Can't resolve host address.\n" + _con.ConnectionString;



                        }
                        break;

                    case 1045:
                        {
                            msg = "Invalid username/password";

                        }
                        break;


                    default:
                        {


                            msg = e.ToString();


                        }
                        break;
                }

                //display problem
                Console.WriteLine(msg);
            }
        }

        //build connection string
        void BuildConString()
        {
            //save read data variable
            string ip = "";

            using (StreamReader sr = new StreamReader(@"C:\VFW\connect.txt"))
            {


                ip = sr.ReadLine();

            }



            //IP 192.168.1.7


            string conString = $"Server={ip};";
            conString += "uid=Dman;";
            conString += "pwd=password;";
            conString += "database=SampleAPIData;";
            conString += "port=8889;";
            conString += "SslMode=none";

            //pass connection string to MySQL object connection method
            _con.ConnectionString = conString;
        }


        //return datatable query function
        DataTable QueryDB(string query)
        {

            //pass query to current connection
            MySqlDataAdapter adapter = new MySqlDataAdapter(query, _con);

            //save table in datatable variable
            DataTable data = new DataTable();

            //select command type
            adapter.SelectCommand.CommandType = CommandType.Text;

            //fill datatable variable
            adapter.Fill(data);

            return data;





        }

    }
}
