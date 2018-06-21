//create variables to hold different levels of the game
var levelOne = [];
var levelTwo = [];
var levelThree = [];


//ask user for memories
alert("Welcome to Reverie! The Memory Game!");
console.log("Welcome to Reverie! The Memory Game!");

alert("Level One\nSelect three words that describe a memory");
console.log("Level One\nSelect three words that describe a memory");

var one = prompt("First word");
var two = prompt("Second");
var three = prompt("Third");


//validate if user choice is blank
while (validateEmpty(one) !== "" || validateEmpty(two) !== "" || validateEmpty(three) !== ""){


    //check if error returns if so, re prompt user for information
    validateEmpty(one) !== ""? one = prompt("You left your first word blank. Please re-enter."): "";

    validateEmpty(two) !== ""? two = prompt("You left your second word blank. Please re-enter."): "";

    validateEmpty(three) !== ""? three = prompt("You left your third word blank. Please re-enter."): "";



}

//push all user choices into level one array
levelOne.push(one,two,three);

alert("BONK! Someone has hit you over the head and trapped you underground.\nYou must escape using the last memory you had.");
console.log("BONK! Someone has hit you over the head and trapped you underground.\nYou must escape using the last memory you had.");

//validate empty space function
function validateEmpty(fld) {
    var error = "";

    if (fld.length == 0) {

        error = "Do not leave blank.Please enter a word.\n";


    } else {

        console.log("The word "+fld+" is acceptable.");
    }
    return error;
}

var guess = "";

var victories = 0;

var chances = 3;

//Access LEVEL ONE
//loop until user runs out of guesses

if (victories == 0) {
    while (chances > 0 && guess != levelOne[1]) {

//loop through level one
        for (var i = 0; i < chances; i++) {


            var guess = prompt("What was the second word you remember saying?");
            console.log("What was the second word you remember saying?");


            //if user guess is correct
            if (guess == levelOne[1]) {

                alert("Great! " + levelOne[1] + " is correct.\nYou have moved a step closer to the exit.");
                console.log("Great! " + levelOne[1] + " is correct.\nYou have moved a step closer to the exit.");

                victories++;

                alert("You have earned a trophy and a function accessory.");
                console.log("You have earned a trophy and a function accessory.");

            } else {

                alert("Nooo! \""+guess+"\" is not right, you are still in the dark. Try again.");
                console.log("Nooo! \""+guess+"\" is not right, you are still in the dark. Try again.");


                chances--;

                //end game if user runs out of chances
                if (chances == 0) {

                    alert("Game Over! You are lost in your memories.");
                    console.log("Game Over! You are lost in your memories.");
                }
            }

//exit loop if user passes round
            if (victories == 1) {
                console.log("1 point. A light is visible in the distance.");
                alert("1 point. A light is visible in the distance.");
                break;
            }
        }
    }
}

//Access to LEVEL TWO
if (victories == 1) {

    alert("Welcome to Level Two\nYou now have a function accessory.The function can retrieve a word from your memory at random.");
    console.log("Welcome to Level Two\nYou now have a function accessory.The function can retrieve a word from your memory at random.");

//while loop to fill level two array
    while (levelTwo.length < 5) {


        var choose = prompt("Describe a new memory with 5 words in total.");
        console.log("Describe a new memory with 5 words in total.");


        //add each choice to level two array
        levelTwo.push(choose);
    }

    //loop through sentence and check each word for blanks
for (var i = 0; i < levelTwo.length; i++){

        //check if word is blank
        while (validateEmpty(levelTwo[i]) !== ""){


            levelTwo[i] = prompt("Word #"+(i+1)+" in your sentence is blank. Please do not leave blank. Add a word.");
            console.log("Word #"+(i+1)+" in your sentence is blank. Please do not leave blank. Add a word.");

        }


}






    //function to retrieve word from arraylist
    function collect(choice) {

        //ternary condition
        //if use is yes, return yes, if not return no
        return choice == "yes" ? "yes" : "no";
    }
    
    //ask user if they would like to use their new function prize for help with level two
    var use = prompt("Would you like to use your function accessory to find a few words in level 2? Type yes or no");
    console.log("Would you like to use your function accessory to find a few words in level 2? Type yes or no");

    //output user choice
    console.log(collect(use));


    //if ternary condition returns a true statement
    if (collect(use).toLowerCase() == "yes"){

        for (var i = 0; i < 1 ; i++){

            console.log("Here is a word I remember "+levelTwo[Math.floor(Math.random() * levelTwo.length)]);

            alert("Here is a word I remember "+levelTwo[Math.floor(Math.random() * levelTwo.length)]);

        }


    }else{

        console.log("Absolutely, It's more challenging this way.")
    }

    

//Loop until user gets correct answer or runs out of chances
    while (chances > 0 && guess != levelTwo[4]) {
//loop through level two memory
        for (var i = 0; i < chances; i++) {

            guess = prompt("What was the fifth word in your last memory?");

            //if answer is correct
            if (guess == levelTwo[4]) {

                alert("Great! " + levelTwo[4] + " is correct.\nYou have moved a step closer to the exit.");
                console.log("Great! " + levelTwo[4] + " is correct.\nYou have moved a step closer to the exit.");

                victories++;

                alert("You have earned a trophy and a class object to help you in your final level.");
                console.log("You have earned a trophy and a class object to help you in your final level.");


            } else {

                alert("Nooo! \""+guess+"\" is not right, you are still in the dark. Try again.");
                console.log("Nooo! \""+guess+"\" is not right, you are still in the dark. Try again.");

                chances--;


                if (chances == 0) {

                    alert("Game Over! You are lost in your memories.");
                    console.log("Game Over! You are lost in your memories.");
                }
            }


            //exit loop if user guesses correctly
            if (victories == 2) {

                console.log("2 points. A large door way is visible.");
                alert("2 points. A large door way is visible.");
                break;
            }
        }

    }

}

//Access LEVEL THREE
if (victories == 2){

    alert("Welcome to level 3! Boss Level!");
    console.log("Welcome to level 3! Boss Level!")

//create a support class for last level
    class support {
        constructor(name){
            this.name = name;
        }

        //getter
        get help(){
            return this.remember();
        }

        //method
        remember(){

            for(var i = 0; i < levelThree.length/2; i++){

                //display random words in level array as hints
                console.log("Here are a few words I remember "+levelThree[Math.floor(Math.random() * levelThree.length)]);

                alert("Here are a few words I remember "+levelThree[Math.floor(Math.random() * levelThree.length)]);
            }
        }
    }

    //while loop to fill level three array
    while (levelThree.length < 7) {


        var choose = prompt("Describe a new memory with 7 words in total");
        console.log("Describe a new memory with 7 words in total");


        //add each choice to level two array
        levelThree.push(choose);
    }


    //loop through sentence and check each word for blanks
    for (var i = 0; i < levelThree.length; i++){

        //check if word is blank
        while (validateEmpty(levelThree[i]) !== ""){


            levelThree[i] = prompt("Word #"+(i+1)+" in your sentence is blank. Please do not leave blank. Add a word.");
            console.log("Word #"+(i+1)+" in your sentence is blank. Please do not leave blank. Add a word.");

        }


    }





    var supportName = prompt("You earned a support object last game, what would you like to name it?");
    console.log("You earned a support object last game, what would you like to name it?");

    //create new helper object
    var helper = new support(supportName);

    //output new object creation and name property parameter that was passed in.
    console.log("Your new helpers name is "+helper.name+".");
    alert("Your new helpers name is "+helper.name+".");

    //ask user if they need help on the next round
var lifeLine = prompt("Would you like to use your helper?\nType yes or no.");
console.log("Would you like to use your helper?\nType yes or no.");

//if yes
if (lifeLine.toLowerCase() == "yes"){

    helper.help;
}

//loop until user chooses correctly
    while(chances > 0 && guess != levelThree[3]){

        //loop through level two memory
        for (var i = 0; i < chances; i++) {

            guess = prompt("What was the fourth word in your last memory?");
            console.log("What was the fourth word in your last memory?");

            //if answer is correct
            if (guess == levelThree[3]) {

                alert("Great! " + levelThree[3] + " is correct.\nYou have reached the exit.");
                alert("Great! " + levelThree[3] + " is correct.\nYou have reached the exit.");

                victories++;


            } else {

                alert("Nooo! \""+guess+"\" is not right, you are still in the dark. Try again.");
                console.log("Nooo! \""+guess+"\" is not right, you are still in the dark. Try again.");

                chances--;


                if (chances == 0) {

                    alert("Game Over! You are lost in your memories.");
                    console.log("Game Over! You are lost in your memories.");
                }
            }


            //exit loop if user guesses correctly
            if (victories == 3) {

                console.log("3 points.");
                alert("You win! You've remembered the way out!");
                console.log("You win! You've remembered the way out!");

                break;
            }
        }





}}