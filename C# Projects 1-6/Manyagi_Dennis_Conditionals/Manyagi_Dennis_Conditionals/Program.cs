using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manyagi_Dennis_Conditionals
{
    class Program
    {
        static void Main(string[] args)
        {

            /*Dennis Manyagi
            SDI Section 01
            11/02/2017
            Assignment: Conditionals
            */

            //Testing Temperature Converter
            //Ask user what temperature number is

            Console.WriteLine("What is the temparature outside right now?");

            //Listen and save answer in a variable

            string Temp = Console.ReadLine();

            //Convert string into correct data type

            double newTemp = Convert.ToDouble(Temp);

            //Check which temperature type it is

            Console.WriteLine("What type of degree is the temperature? Please type C or F");

            //Listen and save answer in a variable

            string tempType = Console.ReadLine();

            //Validate that the user did not leave it blank
            //IsNullOrWhiteSpace for text strings

            while (string.IsNullOrWhiteSpace(tempType))
            {

                //Tell the user what is happening and whats wrong
                Console.WriteLine("Please do not leave blank.\r\nPlease type in C or F");

                //Re-define the variable to save response

                tempType = Console.ReadLine();


            }

            //Convert temperature type to opposite

            double cel = (newTemp - 32) * 1.8;
            double far = (newTemp * 1.8) + 32;

            //Determine user output

            if (tempType == "C" || tempType == "c")
            {

                //Descriptive user output- Convert Celsius to Fahrenheit
                Console.WriteLine("The temperature is in " + far + " degrees Fahrenheit.");

            }
            else if (tempType == "F" || tempType == "f")
            {

                //Descriptive user output- Convert Fahrenheit to Celsius
                Console.WriteLine("The temperature is in " + cel + " degrees Celsius.");

            }

            /* Data Sets to Test-Temperature Converter
            
            Temperature Number = 32, Temperature Type = “F”
             “The temperature is 0 degrees Celsius.”

            o Temperature Number = 100 Temperature Type = “C” 
             “The temperature is 212 degrees Fahrenheit.”

            o Temperature Number = 50 Temperature Type = “c”
               “The temperature is 122 degrees Fahrenheit.”

            o Temperature Number = 92 Temperature Type = F
                "The temperature is 108 degrees Celsius." */



            //Last Chance for Gas - Problem #2

            //Ask user how many gallons tank holds
            Console.WriteLine("How many gallons does your car tank hold?");

            //Listen and save response
            string gallons = Console.ReadLine();

            //Convert response to correct datatype

            double gal = Convert.ToDouble(gallons);

            //Ask user how full gas tank is

            Console.WriteLine("How full is your gas tank?");

            //Listen and save response

            string gasAmount = Console.ReadLine();

            //Convert response to correct datatype

            double gas = Convert.ToDouble(gasAmount);

            //Convert integer into percent

            double gasPercent = gas / 100;

            //Ask user how many miles per gallon the car travels

            Console.WriteLine("How many miles per gallon does your car go?");

            //Listen and save response

            string mpg = Console.ReadLine();

            //Convert response to correct datatype

            double miles = Convert.ToDouble(mpg);

            //Total mileage for the cars

            double totalMileage = miles * gal;

            //How far can the car go with its current tank percentage

            double maxDistance = totalMileage * gasPercent;


            //Descriptive output - Calculate miles needed to continue or stop

            if (maxDistance > 200)
            {

                //If gas mileage is higher, you can make it to gas station

                Console.WriteLine("Yes you can drive " + maxDistance + " more miles and you can make it without stopping for gas!");
            }

            else if (maxDistance < 200)


                //If gas mileage is lower, you cannot make it


                Console.WriteLine("You only have " + maxDistance + " miles you can drive, better get gas now while you can!");

        }



        /*Data Sets to Test - Last Chance for Gas
        
        Gallons -20 , Gas Tank = 50% full, MPG- 25
        Result–“Yes,you can drive 250 more miles and you can make it without
        stopping for gas!”

        Gallons -12 , Gas Tank = 60% full, MPG- 20
        Result–“You only have 144 miles you can drive,better get gas now while you can!”

        Gallons -16 , Gas Tank = 30% full, MPG- 32
        Result–“You only have 153.6 miles you can drive,better get gas now while you can!”*/


        

        


    }

}

    

