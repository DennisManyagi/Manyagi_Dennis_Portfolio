class Animal{
    constructor(description, legs){
        this.legs = legs;
        this.description = description;


    }

    //eat function in animal class
    eat(food){

console.log("I'm eating "+food+" now.")
    }


}

//new class object instantiated
var cat = new Animal("small", 4);


//INHERITANCE from parent class animal
class dog extends Animal{

    constructor(){
        super("furry", 4)

        //private property
        this._loyal = "happy";

    }

    //ENCAPSULATION
//getter method to retrieve feelings of dog
    get feeling(){

        return this._loyal;
    }

    //setter method to change value of dog attitude
    set attitude(val){
        this._loyal = val;
    }


//new child class function for dog child class
    bite(){

        console.log("The dog barks in anger!");

        var feel = prompt("How do you think the dog is feeling?");

//ENCAPSULATION, setter method
        this.attitude = feel;

        console.log("The dog is now "+this._loyal);
    }


}



//New child class object
var PetDog = new dog();



var appetite = prompt("What type of food does your pet eat?");

//encapsulation of properties during output
console.log("I'm a "+cat.description+" cat and i have "+cat.legs+" legs.")


//Getter method
console.log("I'm a "+PetDog.description+" dog and i have "+PetDog.legs+" legs. Today I'm feeling "+PetDog.feeling);


//POLYMORPHISM
//Two separate classes sharing one function
cat.eat(appetite);

PetDog.eat(appetite);

PetDog.bite();



//new child class of animal
class bird extends Animal{
    constructor(){
        super("Flying", 2)
        this.wings = true;

    }
}

//ABSTRACTION - INTERFACE CREATION
var flying = {

    fly : function(doesFly){}


}

var hawk = new bird();

//EXTEND flying interface to bird class
hawk.prototype = Object.create(flying);


hawk.prototype.fly = function(isFlying){

    if (isFlying == true) {

        console.log("You can fly!")
    }else{

        console.log("You can't fly.")
    }

}



var canFly = prompt("Can the bird fly?\nType yes or no");

if (canFly == "yes"){

    canFly = true;

} else {

    canFly = false;
}

//Unable to call implemented interface //not sure why
//hawk.fly(canFly);
