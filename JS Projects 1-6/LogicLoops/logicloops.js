/*

             Manyagi_Dennis
             SDI- Section 01
             11/03/2017
             Assignment- Logic Loops

             */


//Problem #1 Tire Pressure

//Create array to store value in for tires

var tires = [4];

//Ask user what their tire pressure is for each tire
//Listen and save response

var frontLeft = prompt("What is the pressure of the front left tire?");

//Convert value to proper data type

var frontL = Number(frontLeft);


//Ask user what their tire pressure is for each tire
//Listen and save response

var frontRight = prompt("What is the pressure of the front right tire?");

//Convert value to proper data type

var frontR = Number(frontRight);


//Ask user what their tire pressure is for each tire
//Listen and save response

var backLeft = prompt("What is the pressure of the back left tire?");

//Convert value to proper data type

var backL = Number(backLeft);

//Ask user what their tire pressure is for each tire
//Listen and save response

var backRight = prompt("What is the pressure of the back right tire?");

//Convert value to proper data type

var backR = Number(backRight);


//Define the array - assign tire values

tires[0] = frontL;
tires[1] = frontR;
tires[2] = backR;
tires[3] = backL;


//Create condition to check front tires and back tires


if (tires[0] == tires[1] && tires[2] == tires[3])
{

    console.log("The tires pass spec!");

}
else


    console.log("Get your tires checked out!");

/*

Data Sets To Test: Tire Pressure
Front Left – 32, Front Right – 32, Back Left -30 Back Right- 30 - Tires OK
Front Left – 36, Front Right – 32, Back Left -25 Back Right- 25 - Check Tires
Front Left – 22, Front Right – 22, Back Left -35 Back Right- 35 - Tires OK

*/

//Problem 2 - Movie Ticket Price

//Ask user his age
//Listen and save response

var age = prompt("Welcome to the theatres! How old are you?");

//Convert to correct datatype

var ageOld = Number(age);

//Ask user what time their movie is?
//Listen and save response
var time = prompt("What time is your movie playing?");

//Convert response to proper datatype
var movieTime = Number(time);


//Create conditional for age and time

if (ageOld > 55 || ageOld < 10 || movieTime > 13 && movieTime < 18)
{

    console.log("The ticket price is $7.00");

}
else

    console.log("The ticket price is $12.00");

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
var num = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

//Ask user whether they want the sum of evens or odds
//Listen and save response
var answer = prompt("Would you like to see the sum of odds or evens?\r\nPlease enter O or E");


//Create condition for user to see odds and even

//User selects Odd

if (answer == "O" || answer == "o")
{

    var totalOddSum = 0;

    for (var eachOdd in num)
    {
        //For each odd in the array, add it to the total sum

        if (eachOdd % 2 == 1)

            totalOddSum += eachOdd;



    }

    //Descriptive user output

    console.log("The sum of odds is "+totalOddSum+".");


}

//If user chooses even sum

if (answer == "E" || answer == "e")
{


    var totalEvenSum = 0;

    for(var eachEven in num)
    {
        //For each even in the array, add it to the total sum

        if (eachEven % 2 == 0)

            totalEvenSum += eachEven;



    }

    //Descriptive answer output

    console.log("The sum of evens is "+totalEvenSum+".");


}

/*

Data Sets To Test: Add Up The Odds or Evens
Array: {1,2,3,4,5,6,7}, Sum of Evens – 12 Sum of Odds – 16
Array: {12,13,14,15,16,17}, Sum of Evens – 42 Sum of Odds – 45
Array: {21,22,23,24,25,26,27,28,29,30}, Sum of Evens – 130 Sum of Odds – 125

*/


//Problem # 4 While Loop: Charge it!

//Ask user for their credit limit
//Listen and save response

var credit = prompt("What is your credit limit?");

//Convert answer to proper data type

var creditLimit = Number(credit);


//Save total purchases in variable

var totalCharges = 0;


//Create loop to check limits and charges

while (creditLimit > totalCharges)
{

    //Ask user how much they were charged for items
    //Listen and save response
    var purchase = prompt("How much was your current purchase?");

    //Convert to answer to proper data type
    var currentPurchase = Number(purchase);

    //Add current purchase to total charges- Increment of change

    totalCharges += currentPurchase; ;

    //Show user remaining balance
    var balance = creditLimit - totalCharges;

    console.log("With your current purchase of $ "+currentPurchase+ " you can still spend $"+balance+".");

    //Check to see if user went over limit

    if (totalCharges>creditLimit) {

        //Show user how much they overspent
        var overLimit = totalCharges - creditLimit;

        console.log("With your last purchase you have reached your credit limit and exceeded it by $"+overLimit+".");


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