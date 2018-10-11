var donationForm = document.querySelector('#donate');

//change donation amount

function changeAmount(event){

    event.preventDefault(); //stop default action

    //set amount value
    var donation = event.target.innerText;

    var amount = document.querySelector('#amount');

    amount.value = donation;
}

//add events to amount presets
var presets = donationForm.querySelectorAll('.presets button');


//loop through array and add event listener
for(var i = 0; i < presets.length; i++){


    presets[i].addEventListener('click', changeAmount);



}

//validate inputs
function  validateForm(event) {

    event.preventDefault(); //stop button submission



    var form = document.querySelector('#donate');

    var fields = form.querySelectorAll('.required');


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
            submit.removeAttribute('class');
        }
    }



}


function validateRequired(event){


    var target = event.target;
    var parent = target.parentElement;
    var error = '<label class="error">This field is required!</label>';


    if (!target.value.length){

        if (!parent.querySelector('.error')){

            parent.insertAdjacentHTML('beforeend', error);

        }

    } else {

        parent.removeChild(parent.querySelector('.error'));
    }
}

//check if submissions are allowed
var requiredFields = donationForm.querySelectorAll('.required');

for (var i = 0; 0 < requiredFields.length ; i++){


    requiredFields[i].addEventListener('input', validateForm);
    requiredFields[i].addEventListener('blur', validateRequired);
}

//form submission

function send(event){

    event.preventDefault();//stop submission

    var form = document.querySelector('#donate');

    var message = '<h2>Thank you!</h2><p>You are so awesome, sharks love you!</p>';



    var target = event.target;

    var disabled = target.classList.contains('disabled');

    if (disabled == false){


        form.innerHTML = message;
    }
}

//submit form

var submit = donationForm.querySelector('[type=submit]');

submit.addEventListener('click', send);