using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomClass
{
    class box
    {

        //Properties of the Box class go here
        //Member variable - property
        //Global variables, only for this class
        //Member variables are all private
        int mLength;
        int mWidth;
        int mHeight;
        string mColor;


        //Create constructor function
        //Add parameters for the member variables
        public box(int _length, int _width, int _height, string _color) {

            //Set the values of the member variables using the parameters

            mLength = _length;
            mWidth = _width;
            mHeight = _height;
            mColor = _color;

            


        }


        //Method Overloading
        //duplicate the function, with different parameters
        //Create another constructor function, with no color choice

        public box(int _length, int _width, int _height)
        {
            //Set the values of the member variables using the parameters

            mLength = _length;
            mWidth = _width;
            mHeight = _height;

            //Add default color
            mColor = "gray";
        }
        






        //Create a getter method for the height of the cube
        //Getters should always be public

        public int GetHeight(){

            //Return the value of height
            return mHeight;



        }

        //Create getter methods for each member variables

        public int GetLength()
        {

            return mLength;
        }

        public int GetWidth()
        {

            return mWidth;
        }

        public string GetColor()
        {

            return mColor;
        }


        //Creater a setter for our height
        //this.mHeight
        // "this" keyword refers to the current instant of the class

        public void SetHeight(int _height)
        {

            //Add a conditional to test if neg
            if (_height>0) {

                //Change the value of the member variable
                this.mHeight = _height;

            }else
            {

                //Alert the user to not use negative numbers
                Console.WriteLine("This value cannot be negative.\r\nPlease try again.");
            }
        }

        public void SetLength(int _length) {

            this.mLength = _length;

        }




        public void SetWidth(int _width) {

            this.mWidth = _width;

        }

        public void SetColor(string _color) {

            this.mColor = _color;

        }


        //Create a custom method/function

        public int FindVolume(){

            //Use the member variables inside of our calculations

            //volume = width*length*height

            int volume = mWidth * mLength * mHeight;
            return volume;


        }


        public int FindSurfaceArea()
        {

            //Use member area in our calculations

            int surfaceArea = 2 * (mWidth * mLength) + 2 * (mWidth * mHeight) + 2* (mLength * mHeight);
            return surfaceArea;

        }







    }
}
