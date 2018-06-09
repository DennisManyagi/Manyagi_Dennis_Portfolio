using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace Manyagi_Dennis_ArrayLists
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             Manyagi_Dennis
             SDI- Section 01
             11/11/2017
             Assignment: Array List
             
             
             */


            //Call function

            ArrayList();



        }




        //All other methods - other functions below

        public static void ArrayList()
        {
            //Create first arraylist
            ArrayList oneList = new ArrayList() { "Goku", "Vegeta", "Gohan", "Gotenks", "Trunks" };

            //Create second arraylist
            ArrayList twoList = new ArrayList() { "Frieza", "Androids", "Cell", "Super Buu", "Zamasu" };

            

            //Run through both lists and create a sentence with matching outputs.
            for (int i = 0; i < oneList.Count; i++)
            {

                Console.WriteLine("In the ultimate fight, the hero "+oneList[i]+" defeats the villian "+twoList[i]+"."); 

            }


            //Remove some elements from arraylist #1
            oneList.Remove("Goku");
            oneList.Remove("Vegeta");

            //Remove some elements form arraylist #2
            twoList.Remove("Frieza");
            twoList.Remove("Androids");

            //Add some elements to arraylist #1
            oneList.Insert(0,"Vegito");

            //Add some elements to arraylist #2
            twoList.Insert(0,"Super Android 17");



            //Run through the 1st and 2nd array with new values

            for (int i = 0; i < oneList.Count; i++)
            {

                Console.WriteLine("\r\nIn the ultimate fight, the hero " + oneList[i] + " defeats the villian " + twoList[i] + ".");


            }









        }






    }
}
