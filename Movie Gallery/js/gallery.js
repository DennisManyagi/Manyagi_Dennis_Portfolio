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


        var thumbnails = '';

        thumbnails += '<li><img src ="'+data.movies[0].image+'"</li>';
        thumbnails += '<li><img src ="'+data.movies[1].image+'"</li>';
        thumbnails += '<li><img src ="'+data.movies[2].image+'"</li>';
        thumbnails += '<li><img src ="'+data.movies[3].image+'"</li>';
        thumbnails += '<li><img src ="'+data.movies[4].image+'"</li>';



        //insert main image after h2 tag on html form
        movieSection.querySelector('h2').insertAdjacentHTML('afterend', movie);


         //add thumbnails after 1st list item on ul class pagination
        movieSection.querySelector('.pagination li').insertAdjacentHTML('afterend',thumbnails);

    }



}





//Change via Next Button
function nextImage(event){

    //check link of current image
var current = document.querySelector('#gallery img');

    //check name of current movie
    var currentName = document.querySelector('#gallery h3');


//links to all photos
    var image1 = document.querySelector('.pagination li:nth-of-type('+2+') img').src;

    var image2 = document.querySelector('.pagination li:nth-of-type('+3+') img').src;

    var image3 = document.querySelector('.pagination li:nth-of-type('+4+') img').src;

    var image4 = document.querySelector('.pagination li:nth-of-type('+5+') img').src;

    var image5 = document.querySelector('.pagination li:nth-of-type('+6+') img').src;



//check what image is currently being viewed
    if (current.src == image1) {

        current.src = image2;



    }else if(current.src == image2){

        current.src = image3;

    }else if(current.src == image3){

        current.src = image4;

    }else if(current.src == image4){

        current.src = image5;

    }else if(current.src == image5){

        current.src = image1;
    }



}

//Change via Previous Button
function previousImage(event) {



    //check link of current image
    var current = document.querySelector('#gallery img');


    //links to all photos
    var image1 = document.querySelector('.pagination li:nth-of-type(' + 2 + ') img').src;

    var image2 = document.querySelector('.pagination li:nth-of-type(' + 3 + ') img').src;

    var image3 = document.querySelector('.pagination li:nth-of-type(' + 4 + ') img').src;

    var image4 = document.querySelector('.pagination li:nth-of-type(' + 5 + ') img').src;

    var image5 = document.querySelector('.pagination li:nth-of-type(' + 6 + ') img').src;



    //check what image is currently being viewed
    if (current.src == image5) {

        current.src = image4;


    }else if(current.src == image4){

        current.src = image3;

    }else if(current.src == image3){

        current.src = image2;

    }else if(current.src == image2){

        current.src = image1;

    }else if(current.src == image1){

        current.src = image5;
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