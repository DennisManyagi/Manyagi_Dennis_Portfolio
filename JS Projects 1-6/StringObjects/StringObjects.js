/*
            Manyagi_Dennis
            11/11/2017
            SDI: Section- 01
            Assignment: String Objects

            */





//Problem # 1 - Email Address Checker



//Ask user for an email address
//Listen and catch response
var email = prompt("What is your email address?");


//Catch and save function results in same type variable

var validEmail = validateEmail(email);

//Condition to display result of validation

if (validEmail == true)
{
    //Descriptive output of results
    console.log("The email address of "+email+" is a valid email address");

} else {

    //Descriptive output of results
    console.log("The email address of "+email+" is not a valid email address.");

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
//Listen and catch response

var list = prompt("Write a list of items seperated by a given string.");

//Ask user the seperator they used
//Listen and catch response
var seperator = prompt("What type of seperator did you use?");

//Ask user for the new seperator they used
//Listen and catch response
var newSep = prompt("What new seperator do you want to use?");



//Catch return value
var switched = seperate(list, seperator, newSep);

//Descriptive output of result
console.log("The original string of "+list+" with the new separator is "+switched+".");





/*

 Data Sets To Test
List – “1,2,3,4,5” orginalSeparator – “,” newSeparator – “-”
Results – “ The original string of 1,2,3,4,5 with the newseparator is 1-2-3-4-5.”

List – “red: blue: green: pink” orginalSeparator – “:” newSeparator – “,”
Results – “The original string red:blue:green:pink with the new separator is red, blue, green, pink.”

List – “apple + banana + pear” orginal Separator – “+” newSeparator – “.”
Results – “The original string apple+banana+pear with the new separator is apple.banana.pear.”






 */




//Other functions - methods below



//Problem # 2 function
function seperate( list,  sep,  newsep){


    //Create loop to run through each character in string
    for (var i = 0; i < list.length; i++){


        //Replace original seperator string with new seperator string
        list = list.replace(sep, newsep);


    }

    return list;


}



