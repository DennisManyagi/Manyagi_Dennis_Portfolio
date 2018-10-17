
var form = document.querySelector('#form');

//change title
var title = document.querySelector('h2');

title.innerHTML = 'Watch Anime Sign Up';

//change the background image

var background = document.querySelector('body');



background.style.backgroundImage = "url('https://gallery.mailchimp.com/217bb4cb236a854f10f4f13b9/images/079db29a-a9d9-455f-a266-fe37995aba90.jpg')";

//change general information

var info = document.querySelector('p');

info.innerHTML = 'Stream and buy official anime including My Hero Academia, Drifters and Fairy Tail. Watch free anime online or subscribe for more. Start your free trial today.';


//disable submit button

var button = document.querySelector('[type=submit]');

button.disabled = true;

console.log(button);


//enable button if all validation checks are approved
//create validation errors for every single input
//validation must display an error message on the inputs if not filled in
//validate inputs
function  validateForm(event) {

    event.preventDefault(); //stop button submission



    var form = document.querySelector('#form');

    var fields = form.querySelectorAll('input');


//Check for valid values
    var valid = true;

    for (var i =0; i < fields.length; i++){

        //check if fields have value, if not set to false
        if (!fields[i].value){

            valid = false;
        }


        //open submit
        if (valid == true){

            var submit = form.querySelector('[type=submit]');
            submit.disabled = false;
        }
    }



}


function validateRequired(event){


    var target = event.target;
    var parent = target.parentElement;
    var error = '<label class="error">This field is required!</label>';


    console.log(parent);


    if (!target.value.length){

        if (!target.querySelector('.error')){

            parent.insertAdjacentHTML('beforeend', error);

        }

    } else {

        parent.removeChild(parent.querySelector('.error'));
    }
}

//check if submissions are allowed
var requiredFields = form.querySelectorAll('input');

for (var i = 0; 0 < requiredFields.length ; i++){


    requiredFields[i].addEventListener('input', validateForm);
    requiredFields[i].addEventListener('blur', validateRequired);


}




//create a thank you screen
//replace the form content only if validation passes

//form submission

function send(event){

    event.preventDefault();//stop submission

    var form = document.querySelector('#form');

    var message = '<h2>Thank you!</h2><p>You are so awesome, sharks love you!</p>';



    var target = event.target;

    var disabled = target.hasAttribute('disabled');

    if (disabled == false){


        form.innerHTML = message;
    }
}

//submit form

var submit = document.querySelector('[type=submit]');

submit.addEventListener('click', send);