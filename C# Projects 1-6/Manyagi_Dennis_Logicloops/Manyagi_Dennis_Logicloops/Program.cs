using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manyagi_Dennis_Logicloops
{
    class Program
    {
        static void Main(string[] args)
        {

            /*
             
             Manyagi_Dennis
             SDI- Section 01
             11/03/2017
             Assignment- Logic Loops
             
             */


             //Problem #1 Tire Pressure

            //Create array to store value in for tires

            double[] tires = new double[4];

            //Ask user what their tire pressure is for each tire
            Console.WriteLine("What is the pressure of the front left tire?");

            //Listen and save response

            string frontLeft = Console.ReadLine();

            //Convert value to proper data type

            double frontL = Convert.ToDouble(frontLeft);


            //Ask user what their tire pressure is for each tire
            Console.WriteLine("What is the pressure of the front right tire?");

            //Listen and save response

            string frontRight = Console.ReadLine();

            //Convert value to proper data type

            double frontR = Convert.ToDouble(frontRight);


            //Ask user what their tire pressure is for each tire
            Console.WriteLine("What is the pressure of the back left tire?");

            //Listen and save response

            string backLeft = Console.ReadLine();

            //Convert value to proper data type

            double backL = Convert.ToDouble(backLeft);

            //Ask user what their tire pressure is for each tire
            Console.WriteLine("What is the pressure of the back right tire?");

            //Listen and save response

            string backRight = Console.ReadLine();

            //Convert value to proper data type

            double backR = Convert.ToDouble(backRight);


            //Define the array - assign tire values

            tires[0] = frontL;
            tires[1] = frontR;
            tires[2] = backR;
            tires[3] = backL;


            //Create condition to check front tires and back tires


            if (tires[0] == tires[1] && tires[2] == tires[3])
            {

                Console.WriteLine("The tires pass spec!");

            }
            else


                Console.WriteLine("Get your tires checked out!");

            /*
            
            Data Sets To Test: Tire Pressure
            Front Left – 32, Front Right – 32, Back Left -30 Back Right- 30 - Tires OK
            Front Left – 36, Front Right – 32, Back Left -25 Back Right- 25 - Check Tires
            Front Left – 22, Front Right – 22, Back Left -35 Back Right- 35 - Tires OK        
            
            */

            //Problem 2 - Movie Ticket Price

            //Ask user his age
            Console.WriteLine("Welcome to the theatres! How old are you?");

            //Listen and save response

            string age = Console.ReadLine();

            //Convert to correct datatype

            int ageOld = Convert.ToInt32(age);

            //Ask user what time their movie is?
            Console.WriteLine("What time is your movie playing?");

            //Listen and save response
            string time = Console.ReadLine();

            //Convert response to proper datatype
            double movieTime = Convert.ToDouble(time);


            //Create conditional for age and time

            if (ageOld > 55 || ageOld < 10 || movieTime > 13 && movieTime < 18)
            {

                Console.WriteLine("The ticket price is $7.00");

            }
            else

                Console.WriteLine("The ticket price is $12.00");

            /*
             
             Data Sets To Test: Movie Ticket Price
             Age – 57, Time – 20, Ticket Price - $7.00
             Age – 9, Time – 20, Ticket Price - $7.00
             Age – 38, Time – 20, Ticket Price - $12.00
             Age – 25, Time – 16, Ticket Price - $7.00
             Age – 26, Time – 1, Ticket Price - $12.00
             
             
             */

            //Problem 3- Add Up The Odds or Evens

            //Create an array 
            int[] num = new int[] { 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 };

            //Ask user whether they want the sum of evens or odds
            Console.WriteLine("Would you like to see the sum of odds or evens?\r\nPlease enter O or E");

            //Listen and save response
            string answer = Console.ReadLine();


            //Create condition for user to see odds and even

            //User selects Odd

            if (answer == "O" || answer == "o")
            {

                int totalOddSum = 0;

                foreach (int eachOdd in num)
                {
                    //For each odd in the array, add it to the total sum

                    if (eachOdd % 2 == 1)

                        totalOddSum += eachOdd;



                }

                //Descriptive user output

                Console.WriteLine("The sum of odds is {0}", totalOddSum);


            }

            //If user chooses even sum

            if (answer == "E" || answer == "e")
            {


                int totalEvenSum = 0;

                foreach (int eachEven in num)
                {
                    //For each even in the array, add it to the total sum

                    if (eachEven % 2 == 0)

                        totalEvenSum += eachEven;



                }

                //Descriptive answer output

                Console.WriteLine("The sum of evens is {0}", totalEvenSum);


            }

            /*
            
            Data Sets To Test: Add Up The Odds or Evens
            Array: {1,2,3,4,5,6,7}, Sum of Evens – 12 Sum of Odds – 16
            Array: {12,13,14,15,16,17}, Sum of Evens – 42 Sum of Odds – 45
            Array: {21,22,23,24,25,26,27,28,29,30}, Sum of Evens – 130 Sum of Odds – 125
            
            */


            //Problem # 4 While Loop: Charge it!

            //Ask user for their credit limit

            Console.WriteLine("What is your credit limit?");

            //Listen and save response

            string credit = Console.ReadLine();

            //Convert answer to proper data type

            decimal creditLimit = Convert.ToDecimal(credit);


            //Save total purchases in variable

            decimal totalCharges = 0;

            
            //Create loop to check limits and charges

            while (creditLimit > totalCharges)
            {

                //Ask user how much they were charged for items
                Console.WriteLine("How much was your current purchase?");

                //Listen and save response
                string purchase = Console.ReadLine();

                //Convert to answer to proper data type
                decimal currentPurchase = Convert.ToDecimal(purchase);

                //Add current purchase to total charges- Increment of change

                totalCharges += currentPurchase; ;

                //Show user remaining balance
                decimal balance = creditLimit - totalCharges;

                Console.WriteLine("With your current purchase of ${0}, you can still spend ${1}.",currentPurchase, balance);

                //Check to see if user went over limit

                if (totalCharges>creditLimit) {

                    //Show user how much they overspent
                    decimal overLimit = totalCharges - creditLimit;

                    Console.WriteLine("With your last purchase you have reached your credit limit and exceeded it by ${0}.",overLimit);


                }

                /*
                 
                    Data Sets To Test: Charge it!
                    Credit Limit – 20.00
                    Purchase1- 5.00 - You can still spend $15.00
                    Purchase2- 12.00 - You can still spend $3.00
                    Purchase3- 7.00 - You have exceeded your limit by $4.00.
                    Purchase4- 21.00 - You have exceeded your limit by $1.00.
             
             
             
             */

            }



        }
    }
}
