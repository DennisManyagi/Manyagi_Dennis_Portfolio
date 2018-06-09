

/*
 Manyagi_Dennis
 SDI- Section 01
 11/15/2017
 Assignment: Custom Class - The Hero

 */

//Create new object - hero

var GoodGuy = new Hero(50, 0, 25);

//Show user current HP
console.log("Your Hero's current hit points are "+GoodGuy.current+".");

//For loop to cycle through 5 times

for (var i = 0; i < 5; i++)
{


    //Ask the user if the hitpoints have moved up or down
    // Listen and catch users repsonse
    var upDown = prompt("Did the Hero's hit points go up or down?\r\nEnter up or down");



    if (upDown == "up" || upDown == "UP" || upDown == "Up" || upDown =="uP")
    {



        //Ask user how much the hitpoints should change?
        // Listen and catch users repsonse
        var hitChange = prompt("By what number should the Hero's hit points change?");



        //Descriptive output of result
        console.log("Your Hero's hit points have changed to "+GoodGuy.IncreaseHp(hitChange)+".");





    } else if (upDown == "down" || upDown == "Down" || upDown == "DOWN")
    {


        //Ask user how much the hitpoints should change?
        //Listen and catch users response
        var hitChange = prompt("By what number should the Hero's hit points change?");


        //Descriptive output of result
        console.log("Your Hero's hit points have changed to "+GoodGuy.DecreaseHp(hitChange)+".");



    }










}

function Hero(high, low, current) {
    this.high = high;
    this.low = low;
    this.current = current;
    this.IncreaseHp = IncreaseHp;
    this.DecreaseHp = DecreaseHp;


    function IncreaseHp(_change) {

        //Conditional to increase HP
        if (current < high)
        {
            //Increase hp with user input/parameter
            current = current + Number(_change);
        }

        //Conditional to stop going past highest hp
        if (current > high)
        {

            var balance = current - high;

            current -= balance;

        }



        return current;
    }

    //Decrease Hero Hp

    function DecreaseHp(_change)
    {
        //Condition to decrease hit points
        if (current > low)
        {
            current-= _change;
        }

        //Condition to stay above lowest hit points
        if (current < low)
        {
            //Current hitpoints should equal lowest
            current = current * -1;

            current = current - current;
        }


        return current;
    }

}



