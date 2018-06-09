/*Dennis Manyagi
            SDI Section 01
            11/02/2017
            Assignment: Conditionals
            */

//Testing Temperature Converter
//Ask user what temperature number is
//Listen and save answer in a variable

var Temp = prompt("What is the temperature outside right now?");


//Check which temperature type it is
//Listen and save answer in a variable

var tempType = prompt("What type of degree is the temperature? Please type C or F");


//Convert temperature type to opposite

var cel = (Temp - 32) * 1.8;
var far = (Temp * 1.8) + 32;

//Determine user output

if (tempType == "C" || tempType == "c")
{

    //Descriptive user output- Convert Celsius to Fahrenheit
    console.log("The temperature is in " + far + " degrees Fahrenheit.");

}
else if (tempType == "F" || tempType == "f")
{

    //Descriptive user output- Convert Fahrenheit to Celsius
    console.log("The temperature is in " + cel + " degrees Celsius.");

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
//Listen and save response
var gallons = prompt("How many gallons does your car tank hold?");


//Listen and save response
var gasAmount = prompt("How full is your gas tank?");


//Convert integer into percent

var gasPercent = gasAmount / 100;

//Ask user how many miles per gallon the car travels
//Listen and save response

var mpg = prompt("How many miles per gallon does your car go?");


//Total mileage for the cars

var totalMileage = mpg * gallons;

//How far can the car go with its current tank percentage

var maxDistance = totalMileage * gasPercent;


//Descriptive output - Calculate miles needed to continue or stop

if (maxDistance > 200)
{

    //If gas mileage is higher, you can make it to gas station

    console.log("Yes you can drive " + maxDistance + " more miles and you can make it without stopping for gas!");
}

else if (maxDistance < 200){


//If gas mileage is lower, you cannot make it


    console.log("You only have " + maxDistance + " miles you can drive, better get gas now while you can!");

/*Data Sets to Test - Last Chance for Gas

Gallons -20 , Gas Tank = 50% full, MPG- 25
Result–“Yes,you can drive 250 more miles and you can make it without
stopping for gas!”

Gallons -12 , Gas Tank = 60% full, MPG- 20
Result–“You only have 144 miles you can drive,better get gas now while you can!”

Gallons -16 , Gas Tank = 30% full, MPG- 32
Result–“You only have 153.6 miles you can drive,better get gas now while you can!”*/







}