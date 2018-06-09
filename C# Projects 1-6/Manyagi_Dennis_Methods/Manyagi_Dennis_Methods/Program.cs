using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manyagi_Dennis_Methods
{
    class Program
    {
        static void Main(string[] args)
        {

            /*Dennis Manyagi
              SDI- Section 01
              11/08/2017
              Assignment: Methods
             
             */


            //Ask user how many gallons it would take to paint a wall
            Console.WriteLine("What is the width size of your wall?");

            //Listen and catch response
            string widthString = Console.ReadLine();

            //Convert answer to correct datatype
            double width;

            //Report answer to user
            Console.WriteLine("The width size of your wall is {0} feet", widthString);

            while (!double.TryParse(widthString, out width))
            {
                //This will run if it could not convert it
                //Tell the user the problem
                Console.WriteLine("Oops, you type in something other than a number.\r\nPlease enter a number:");

                //Re-capture the user response- use the same variable as a bove
                widthString = Console.ReadLine();

                //Have to RE-convert it to an integer
                double.TryParse(widthString, out width);
            }



            //Ask user the height of the wall
            Console.WriteLine("What is the height of your wall?");

            //Listen and catch response
            string heightString = Console.ReadLine();

            //Convert answer to correct datatype
            double height;

            //Report answer to user
            Console.WriteLine("The height size of your wall is {0} feet.", heightString);


            while (!double.TryParse(heightString, out height))
            {
                //This will run if it could not convert it
                //Tell the user the problem
                Console.WriteLine("Oops, you type in something other than a number.\r\nPlease enter a number:");

                //Re-capture the user response- use the same variable as a bove
                heightString = Console.ReadLine();

                //Have to RE-convert it to an integer
                double.TryParse(heightString, out height);
            }


            //Ask user how many coats of paint they want on the wall
            Console.WriteLine("How many coats of paint do you want on the wall?");

            //Listen and catch response
            string coatString = Console.ReadLine();

            //Convert answer to correct datatype

            double coat;

            //Report answer to user
            Console.WriteLine("You are using {0} coats of paint.",coatString);

            while (!double.TryParse(coatString, out coat))
            {
                //This will run if it could not convert it
                //Tell the user the problem
                Console.WriteLine("Oops, you type in something other than a number.\r\nPlease enter a number:");

                //Re-capture the user response- use the same variable as a bove
                coatString = Console.ReadLine();

                //Have to RE-convert it to an integer
                double.TryParse(coatString, out coat);
            }


            //Ask user how much surface area one gallon of paint will cover
            Console.WriteLine("What is the surface area one gallon of paint will cover? (in feet *squared)?");

            //Listen and catch response
            string surfString = Console.ReadLine();

            //Convert answer to correct datatype
            double surf;

            //Report answer to user
            Console.WriteLine("The surface area each gallon of paint will cover is {0} feet.", surfString);

            while (!double.TryParse(surfString, out surf))
            {
                //This will run if it could not convert it
                //Tell the user the problem
                Console.WriteLine("Oops, you type in something other than a number.\r\nPlease enter a number:");

                //Re-capture the user response- use the same variable as a bove
                surfString = Console.ReadLine();

                //Have to RE-convert it to an integer
                double.TryParse(surfString, out surf);
            }

            //Call and catch result in main method 

            double gallons = PaintTotal(width,height,surf, coat);

            //Descriptive Output of results
            Console.WriteLine("For {0} coats on that wall, you will need {1} gallons of paint.",coat,gallons);

            /*
             
             Data Sets To Test

            Width – 8, Height – 10, Coats – 2, Surface Area - 300 ft2
            Results - “For 2 coats on that wall,you will need.53 gallons of paint.”

            Width – 30, Height – 12.5, Coats – 3, Surface Area - 350 ft2
            Results - “For 3 coats on that wall,you will need 3.21 gallons of paint.”

            Width – 40, Height – 52.5, Coats – 4, Surface Area - 390 ft2
            Results - “For 4 coats on that wall,you will need 21.53 gallons of paint.”
             
             
             
             
             */



            //Problem #2: Stung!

            //Ask user how many pounds the animal weighs
            Console.WriteLine("How many pounds does the animal weigh?");

            //Listen and catch response
            string weight = Console.ReadLine();

            //Convert answer to proper datatype
            double pounds;

            //Report answer
            Console.WriteLine("The animal weighs {0} pounds.",weight);

            while (!double.TryParse(weight, out pounds))
            {

                //Tell the user the problem
                Console.WriteLine("Oops, you type in something other than a number.\r\nPlease enter a number:");

                //Re-capture the user response- use the same variable as a bove
                weight = Console.ReadLine();

                //Have to RE-convert it to an integer
                double.TryParse(weight, out pounds);
                
            }

            //Capture result in a variable
            double stings = BeeSting(pounds);

            //Descriptive output
           Console.WriteLine("It takes {0} bee stings to kill this animal.", stings);



            /*
             
             Data Sets To Test
                Animal’s Weight – 10
                Results-“It takes 90 bee stings to kill this animal.”  
                Animal’s Weight – 160
                Results-“It takes 1440 bee stings to kill this animal.” 
                Animal’s Weight – Twenty
                Results–Re-prompt for number value. o Test one of your own.
                Animal’s Weight – 20
                Results-“It takes 180 bee stings to kill this animal.”
             
             
             
             */



            //Problem #3 Reverse it

            //Original items of 1st array
            string[] fruitArray = new string[] { "apple", "pear", "peach", "cocount", "kiwi" };

            //Original items of 2nd Array
            string[] colors = new string[] {"red", "orange", "yellow", "green", "blue", "indigo", "violet"};

            //Original items of 3rd Array
            string[] food = new string[] { "fries", "pancakes", "sausage", "eggs"};




            //Catch and hold return value of reverse function #1 array
            string[] fruitR = Rev(fruitArray);


            //Catch and hold return value of reverse function #2 array
            string[] colorR = Rev(colors);

            //Catch and hold return value of reverse function #3 array
            string[] foodR = Rev(food);

            


            //Display each item in the 1st original array and 1st reverse array

            for (int i = 0; i < fruitR.Length; i++)
            {
                //Capture array string items in reverse array
                string reverseit = fruitR[i];

                //Capture array string items in original array
                string fruitnow = fruitArray[i];


                //Descriptive output of each item changing positions 
                Console.WriteLine("Your original array was "+fruitnow+" and now it is reversed as "+reverseit+".");
               
                

            }

            
            //Display each item in the 2nd array and 2nd reverse array

            for (int i = 0; i < colorR.Length; i++)
            {
                //Capture array string items in reverse array
                string reverseit = colorR[i];

                //Capture array string items in original array
                string colorsnow = colors[i];


                //Descriptive output of each item changing positions 
                Console.WriteLine("Your original array was " + colorsnow + " and now it is reversed as " + reverseit + ".");



            }

            //Display each item in the 3rd array and 3rd reverse array

            for (int i = 0; i < foodR.Length; i++)
            {
                //Capture array string items in reverse array
                string reverseit = foodR[i];

                //Capture array string items in original array
                string foodnow = food[i];


                //Descriptive output of each item changing positions 
                Console.WriteLine("Your original array was " + foodnow + " and now it is reversed as " + reverseit + ".");



            }

            /*
             
          1st  Initial array – [“apple”, “pear”, “peach”, “coconut”, “kiwi”]
               Results - Your original array was [“apple”, “pear”, “peach”, “coconut”,
                         “kiwi”] and now it is reversed as [“kiwi”, “coconut”, “peach”, “pear”,
                         “apple”]

          2nd  Initial array – [“red”, “orange”, “yellow”, “green”, “blue”, ”indigo”, “violet”] 
            Results - Your original array was [“red”, “orange”, “yellow”, “green”,
                      “blue”, ”indigo”, “violet”] and now it is reversed as [“violet”, “indigo”,
                      “blue”, “green”, “yellow”, “orange”, “red”]
             
             
          3rd  Initial array – [“fries”, “pancakes”, “sausage”, “eggs”]
               Results - Your original array was [“fries”, “pancakes”, “sausage”, “eggs”] and now it is reversed as [“eggs”, “sausage”, “pancakes”, “fries”]
             
             
             
             
             
             
             
             */






        }











        //Other Methods - Functions below

        //Paint wall function

        static public double PaintTotal(double w, double l, double s, double c) {

            //Calculate surface area of wall
            double wallSize = w * l;

            double gallons = (wallSize / s) * c;

            //Return wall surface area
            return gallons;



        }

        //Problem # 2 - Stung Function

        static public double BeeSting(double p) {

            //Sting required to kill
            double totalStings = p * 9;

            //Return sting total
            return totalStings;


        }

        //Problem # 3 - Reverse It!
        static public string[] Rev(string[] r)
        {
            //New string array to hold reverse output
            string[] reverse = new string[r.Length];

            //length of paramater to count
            int j = r.Length - 1;


            //For loop to run through each item in paramater
            for (int i = 0; i < r.Length; i++){

                //Last index of new string array equals first index of paramater
                reverse[j] = r[i];

                //Reduce index of new array string every iteration
                j--;

                
            }
            //return value of new string array
            return reverse;
        }
       




    }

}
