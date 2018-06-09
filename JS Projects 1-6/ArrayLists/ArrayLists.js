
/*
 Manyagi_Dennis
 SDI- Section 01
 11/11/2017
 Assignment: Array List


 */


//Call function

ArrayList();








//All other methods - other functions below

function ArrayList()
{
    //Create first arraylist
    var oneList = [ "Goku", "Vegeta", "Gohan", "Gotenks", "Trunks" ];

    //Create second arraylist
    var twoList = ["Frieza", "Androids", "Cell", "Super Buu", "Zamasu" ];



    //Run through both lists and create a sentence with matching outputs.
    for (var i = 0; i < oneList.length; i++)
    {

        console.log("In the ultimate fight, the hero "+oneList[i]+" defeats the villian "+twoList[i]+".");

    }


    //Remove some elements from arraylist #1
    oneList.pop();
    oneList.shift();

    //Remove some elements form arraylist #2
    twoList.pop();
    twoList.shift();

    //Add some elements to arraylist #1
    oneList.push("Vegito");

    //Add some elements to arraylist #2
    twoList.push("Super Android 17");



    //Run through the 1st and 2nd array with new values

    for (var i = 0; i < oneList.length; i++)
    {

        console.log("\r\nIn the ultimate fight, the hero " + oneList[i] + " defeats the villian " + twoList[i] + ".");


    }
}
