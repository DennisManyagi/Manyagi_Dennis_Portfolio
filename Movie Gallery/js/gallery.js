
//hold json data
var movieImage1 = '';
var movieName1 = '';
var movieDescription1 = '';

var movieImage2 = '';
var movieName2 = '';
var movieDescription2 = '';

var movieImage3 = '';
var movieName3 = '';
var movieDescription3 = '';

var movieImage4 = '';
var movieName4 = '';
var movieDescription4 = '';

var movieImage5 = '';
var movieName5 = '';
var movieDescription5 = '';







//use ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function(){
    //save JSON data
    var data = JSON.parse(xhr.responseText);




    //Insert the HTML articles & into section ( insertAdjacentHTML)

    var movieSection = document.querySelector('#gallery');
    if (movieSection){

        //create variable to store data
        var movie = '';




            //format HTML with encapsulated variables
            movie += '<article>';
            movie += '<p><img src =" '+ data.movies[0].image + '"alt="' + data.movies[0].name+ '"></p>';
            movie += '<h3>' + data.movies[0].name + '</h3>';
            movie += '<p class="author">'+data.movies[0].description+'</p>';
            movie += '</article>';






        //insert main image after h2 tag on html form
        movieSection.querySelector('h2').insertAdjacentHTML('afterend', movie);










    }



//hold json data
    movieImage1 = data.movies[0].image;
    movieName1 = data.movies[0].name;
    movieDescription1 = data.movies[0].description;

    movieImage2 = data.movies[1].image;
    movieName2 = data.movies[1].name;
    movieDescription2 = data.movies[1].description;

    movieImage3 = data.movies[2].image;
    movieName3 = data.movies[2].name;
    movieDescription3 = data.movies[2].description;

    movieImage4 = data.movies[3].image;
    movieName4 = data.movies[3].name;
    movieDescription4 = data.movies[3].description;

    movieImage5 = data.movies[4].image;
    movieName5 = data.movies[4].name;
    movieDescription5 = data.movies[4].description;

}





//Change via Next Button
function nextImage(event){

    //check link of current image
var current = document.querySelector('#gallery img');

    //check name of current movie
    var currentName = document.querySelector('#gallery h3');

    //check descr of current movie
    var currentDescription = document.querySelector('.author');




//check what image is currently being viewed
    if (current.src == movieImage1) {

        //change image
        current.src = movieImage2;



        //Change h3 tag
        currentName.innerText = movieName2;




        //Change p tag
        currentDescription.innerText = movieDescription2;




    }else if(current.src == movieImage2){

        //change image
        current.src = movieImage3;

        //Change h3 tag
        currentName.innerText = movieName3;


        //Change p tag
        currentDescription.innerText = movieDescription3;

    }else if(current.src == movieImage3){

        //change image
        current.src = movieImage4;

        //Change h3 tag
        currentName.innerText = movieName4;




        //Change p tag
        currentDescription.innerText = movieDescription4;

    }else if(current.src == movieImage4){

        //change image
        current.src = movieImage5;

        //Change h3 tag
        currentName.innerText = movieName5;




        //Change p tag
        currentDescription.innerText = movieDescription5;

    }else if(current.src == movieImage5){

        //change image
        current.src = movieImage1;

        //Change h3 tag
        currentName.innerText = movieName1;




        //Change p tag
        currentDescription.innerText = movieDescription1;
    }



}

//Change via Previous Button
function previousImage(event) {



    //check link of current image
    var current = document.querySelector('#gallery img');

    //check name of current movie
    var currentName = document.querySelector('#gallery h3');

    //check descr of current movie
    var currentDescription = document.querySelector('.author');




    //check what image is currently being viewed
    if (current.src == movieImage5) {

        //change image
        current.src = movieImage4;

        //Change h3 tag
        currentName.innerText = movieName4;




        //Change p tag
        currentDescription.innerText = movieDescription4;


    }else if(current.src == movieImage4){

        //change image
        current.src = movieImage3;

        //Change h3 tag
        currentName.innerText = movieName3;




        //Change p tag
        currentDescription.innerText = movieDescription3;

    }else if(current.src == movieImage3){

        //change image
        current.src = movieImage2;

        //Change h3 tag
        currentName.innerText = movieName2;




        //Change p tag
        currentDescription.innerText = movieDescription2;

    }else if(current.src == movieImage2){

        //change image
        current.src = movieImage1;

        //Change h3 tag
        currentName.innerText = movieName1;




        //Change p tag
        currentDescription.innerText = movieDescription1;

    }else if(current.src == movieImage1){

        //change image
        current.src = movieImage5;

        //Change h3 tag
        currentName.innerText = movieName5;




        //Change p tag
        currentDescription.innerText = movieDescription5;
    }





}



//Attach Event to Next/Previous
var next = document.querySelector('.pagination li:last-of-type button');
next.addEventListener("click", nextImage);


var previous = document.querySelector('.pagination li:first-of-type button');
previous.addEventListener("click", previousImage);


//Call Ajax
xhr.open('GET', 'https://dennismanyagi.github.io/comic/Horror.json', true);
xhr.send(null);