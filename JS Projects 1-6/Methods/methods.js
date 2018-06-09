
/*Dennis Manyagi
  SDI- Section 01
  11/08/2017
  Assignment: Methods

 */


//Ask user how many gallons it would take to paint a wall
//Listen and catch response
var widthString = prompt("What is the width size of your wall?");


//Report answer to user
console.log("The width size of your wall is "+widthString+" feet");

while (!Number(widthString))
{
    //This will run if it could not convert it
    //Tell the user the problem
    // Re-capture the user response- use the same variable as a bove
    widthString = prompt("Oops, you type in something other than a number.\r\nPlease enter a number:");

    //Have to RE-convert it to an integer
    Number(widthString);
}



//Ask user the height of the wall
//Listen and catch response
var heightString = prompt("What is the height of your wall?");

//Report answer to user
console.log("The height size of your wall is "+heightString+" feet." );


while (!Number(heightString))
{
    //This will run if it could not convert it
    //Tell the user the problem
    //Re-capture the user response- use the same variable as a bove
    heightString = prompt("Oops, you type in something other than a number.\r\nPlease enter a number:");

    //Have to RE-convert it to an integer
    Number(heightString);
}


//Ask user how many coats of paint they want on the wall
//Listen and catch response
var coatString = prompt("How many coats of paint do you want on the wall?");

//Report answer to user
console.log("You are using "+coatString+" coats of paint.");

while (!Number(coatString))
{
    //This will run if it could not convert it
    //Tell the user the problem
    //Re-capture the user response- use the same variable as a bove
    coatString = prompt("Oops, you type in something other than a number.\r\nPlease enter a number:");

    //Have to RE-convert it to an integer
    Number(coatString);
}


//Ask user how much surface area one gallon of paint will cover
//Listen and catch response
var surfString = prompt("What is the surface area one gallon of paint will cover? (in feet *squared)?");


//Report answer to user
console.log("The surface area each gallon of paint will cover is "+surfString+" feet.");

while (!Number(surfString))
{
    //This will run if it could not convert it
    //Tell the user the problem
    //Re-capture the user response- use the same variable as a bove
    surfString = prompt("Oops, you type in something other than a number.\r\nPlease enter a number:");

    //Have to RE-convert it to an integer
    Number(surfString);
}

//Call and catch result in main method

var gallons = PaintTotal(widthString,heightString,surfString, coatString);

//Descriptive Output of results
console.log("For "+coatString+" coats on that wall, you will need "+gallons+" gallons of paint.");

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
//Listen and catch response
var weight = prompt("How many pounds does the animal weigh?");


//Report answer
console.log("The animal weighs "+weight+" pounds.");

while (!Number(weight))
{

    //Tell the user the problem
    //Re-capture the user response- use the same variable as a bove
    weight = prompt("Oops, you type in something other than a number.\r\nPlease enter a number:");

    //Have to RE-convert it to an integer
    Number(weight);

}

//Capture result in a variable
var stings = BeeSting(weight);

//Descriptive output
console.log("It takes "+stings+" bee stings to kill this animal.");



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
var fruitArray = [ "apple", "pear", "peach", "coconut", "kiwi"];

//Original items of 2nd Array
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//Original items of 3rd Array
var food = ["fries", "pancakes", "sausage", "eggs"];




//Catch and hold return value of reverse function #1 array
var  fruitR = Rev(fruitArray);


//Catch and hold return value of reverse function #2 array
var colorR = Rev(colors);

//Catch and hold return value of reverse function #3 array
var foodR = Rev(food);




//Display each item in the 1st original array and 1st reverse array

for (var i = 0; i < fruitR.Length; i++)
{
    //Capture array string items in reverse array
    var reverseit = fruitR[i];

    //Capture array string items in original array
    var fruitnow = fruitArray[i];


    //Descriptive output of each item changing positions
    console.log("Your original array was "+fruitnow+" and now it is reversed as "+reverseit+".");



}


//Display each item in the 2nd array and 2nd reverse array

for (var i = 0; i < colorR.length; i++)
{
    //Capture array string items in reverse array
    var reverseit = colorR[i];

    //Capture array string items in original array
    var colorsnow = colors[i];


    //Descriptive output of each item changing positions
    console.log("Your original array was " + colorsnow + " and now it is reversed as " + reverseit + ".");



}

//Display each item in the 3rd array and 3rd reverse array

for (var i = 0; i < foodR.length; i++)
{
    //Capture array string items in reverse array
    var reverseit = foodR[i];

    //Capture array string items in original array
    var foodnow = food[i];


    //Descriptive output of each item changing positions
    console.log("Your original array was " + foodnow + " and now it is reversed as " + reverseit + ".");





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

function PaintTotal( w,  l, s,  c) {

    //Calculate surface area of wall
    var wallSize = w * l;

    var gallons = (wallSize / s) * c;

    //Return wall surface area
    return gallons;



}

//Problem # 2 - Stung Function

function BeeSting(p) {

    //Sting required to kill
    var totalStings = p * 9;

    //Return sting total
    return totalStings;


}

//Problem # 3 - Reverse It!
function Rev(r)
{
    //New string array to hold reverse output
    var reverse = [r.length];

    //length of parameter to count
    var j = r.length - 1;


    //For loop to run through each item in paramater
    for (var i = 0; i < r.length; i++){

    //Last index of new string array equals first index of paramater
    reverse[j] = r[i];

    //Reduce index of new array string every iteration
    j--;


}
    //return value of new string array
    return reverse;
}