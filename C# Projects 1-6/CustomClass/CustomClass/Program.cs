using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomClass
{
    class Program
    {
        static void Main(string[] args)
        {



            //Create our first box
            //Call the constructor function

            box firstBox = new box(5,5,5,"blue");


            //Second box
            box secondBox = new box(6,7,8,"red");

            //Can we access the member variables directly?
            //DO not make them public
            /*
            Console.WriteLine(firstBox.mHeight);
            firstBox.mHeight = 10;
            Console.WriteLine(firstBox.mHeight);
            */

            //Access the information about the box
            //Getter method
            //Create this in the custom class file
            Console.WriteLine("The height of our first box is "+firstBox.GetHeight());

            //Use all of our getter methods.
            Console.WriteLine("The length of our first box is " + firstBox.GetLength());
            Console.WriteLine("The width of our first box is " + firstBox.GetWidth());
            Console.WriteLine("The color of our first box is " + firstBox.GetColor());



            //What does the second box look like?
            Console.WriteLine("The height of our second box is " + secondBox.GetHeight());
            Console.WriteLine("The length of our second box is " + secondBox.GetLength());
            Console.WriteLine("The width of our second box is " + secondBox.GetWidth());
            Console.WriteLine("The color of our second box is " + secondBox.GetColor());





            //Change the value of height of our first box
            firstBox.SetHeight(-10);
            Console.WriteLine("\r\nThe height of our first box after the setter is " + firstBox.GetHeight());

            //Change the value of height of our second box
            secondBox.SetHeight(2);
            Console.WriteLine("The height of our second box after the setter is " + secondBox.GetHeight());



            //Use the rest of the setters
            firstBox.SetLength(10);
            firstBox.SetWidth(10);
            firstBox.SetColor("Yellow");

            Console.WriteLine("\r\nThe length of our first box is " + firstBox.GetLength());
            Console.WriteLine("The width of our first box is " + firstBox.GetWidth());
            Console.WriteLine("The color of our first box is " + firstBox.GetColor());

            //Call on our custom class method
            Console.WriteLine("The volume of the first box is "+firstBox.FindVolume());
            Console.WriteLine("The volume of second box is "+secondBox.FindVolume());



            //function call our surface area function

            Console.WriteLine("The surface area of the first box is "+firstBox.FindSurfaceArea());
            Console.WriteLine("The surface area of the second box is " + secondBox.FindSurfaceArea());




            firstBox.SetHeight(10);


            Console.WriteLine("The surface area of the first box is " + firstBox.FindVolume());


            //Call the constructor function with no color choice
            box thirdBox = new box(6, 6, 6);

            //Call the getters
            Console.WriteLine("\r\nThe length of our third box is "+thirdBox.GetLength());
            Console.WriteLine("\r\nThe length of our third box is " + thirdBox.GetWidth());
            Console.WriteLine("\r\nThe length of our third box is " + thirdBox.GetHeight());
            

            //Set the color

            thirdBox.SetColor("pink");

            Console.WriteLine("\r\nThe length of our third box is " + thirdBox.GetColor());
        }
    }
}
