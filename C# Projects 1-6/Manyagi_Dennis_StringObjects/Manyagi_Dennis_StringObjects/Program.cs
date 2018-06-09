using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manyagi_Dennis_StringObjects
{
    class Program
    {
        static void Main(string[] args)
        {

            /*
             Manyagi_Dennis
             11/11/2017
             SDI: Section- 01
             Assignment: String Objects
             
             */





            //Problem # 1 - Email Address Checker



            //Ask user for an email address
            Console.WriteLine("What is your email address?");

            //Listen and catch response
            string email = Console.ReadLine();


            //Check for blank spaces in paramater
            while (string.IsNullOrWhiteSpace(email))
            {

                //Tell the user what is happening and whats wrong

                Console.WriteLine("Please do not leave blank spaces.\r\nPlease type in your full email:");


                //Re-define the variable to save response
                email = Console.ReadLine();

            }

            //Catch and save function results in same type variable

            bool validEmail = emails(email);

            //Condition to display result of validation

            if (validEmail == true)
            {
                //Descriptive output of results
                Console.WriteLine("The email address of {0} is a valid email address",email);

            } else {

                //Descriptive output of results
                Console.WriteLine("The email address of {0} is not a valid email address", email);

            }


            /*
             Data Sets To Test
             Email – test@fullsail.com
             Results - “The email address of test@fullsail.com is a valid email address.”  
             
             Email – test@full@sail.com
             Results-“The email address of test@full@sail.com is not a valid email address.”

             Email – test@full sail.com
             Results-“The email address of test@fullsail.com is not a valid email address.”

             Email – dobbytheelf@hogwarts.com
             Results-“The email address of dobbytheelf@hogwarts.com is not a valid email address.”

             
             
             
             */




            //Problem # 2 Seperator Swap Out

            //Ask user list of string items
            Console.WriteLine("Write a list of items seperated by a given string.");

            //Listen and catch response

            string list = Console.ReadLine();

            //Ask user the seperator they used
            Console.WriteLine("What type of seperator did you use?");

            //Listen and catch response
            string seperator = Console.ReadLine();

            //Ask user for the new seperator they used
            Console.WriteLine("What new seperator do you want to use?");

            //Listen and catch response
            string newSep = Console.ReadLine();



            //Catch return value
            string switched = seperate(list, seperator, newSep);

            //Descriptive output of result
            Console.WriteLine("The original string of {0} with the new separator is {1}.",list,switched);





            /*
             
             Data Sets To Test
            List – “1,2,3,4,5” orginalSeparator – “,” newSeparator – “-”
            Results – “ The original string of 1,2,3,4,5 with the newseparator is 1-2-3-4-5.”

            List – “red: blue: green: pink” orginalSeparator – “:” newSeparator – “,”
            Results – “The original string red:blue:green:pink with the new separator is red, blue, green, pink.”

            List – “apple + banana + pear” orginal Separator – “+” newSeparator – “.”
            Results – “The original string apple+banana+pear with the new separator is apple.banana.pear.”
             
             
             
             
             
             
             */





        }












        //Other functions - methods below
        //Valid email function
        static public bool emails(string email)
        {
            

            //Check and create string array to hold values after and before "@"
            //Check for @ symbol
            string[] mail = email.Split('@');


            //Check to see length of characters in array
            if (mail.Count() != 2)
                return false;


            //Check for empty results or short email length
            if (mail[0].Length == 0 || mail[1].Length < 3)
                return false;




            //Check length between period seperator
            if (!mail[1].Contains("."))
                return false;

            //Check if characters in array are letters

            if (!Char.IsLetter((mail[0])[0]))
                return false;

            //Check if items in array are valid characters

            foreach (char m in email)
            {
                if (!Char.IsLetter(m) && !Char.IsNumber(m) && m != '_' && m != '.' && m != '@')
                    return false;
            }


            //Check for invalid forms of email types

            if (email.Contains("..") || email.Contains(".@") || email.Contains("@.") || email.Contains("._."))
                return false;

            if (email.EndsWith("."))
                return false;


            //Return true if all steps are not invalid or false
            return true;

            
        }



        //Problem # 2 function
           static public string seperate(string list, string sep, string newsep){

            
            //Create loop to run through each character in string
            for (int i = 0; i < list.Length; i++){


                //Replace original seperator string with new seperator string
                list = list.Replace(sep, newsep);


            }

            return list;


        }

















        }

    }


