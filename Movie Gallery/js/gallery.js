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



        //loop through each JSON object
        for (var i = 0; i < data.movies.length; i++){


            //format HTML with encapsulated variables
            movie += '<article>';
            movie += '<p><img src =" '+ data.movies[i].image + '"alt="' + data.movies[i].name+ '"></p>';
            movie += '<h3>' + data.movies[i].name + '</h3>';
            movie += '<p>'+data.movies[i].description+'</p>';
            movie += '</article>';

            movie += '<li><img src="'+ data.movies[i].image + '" alt=""></li>';
            movie += '<li class="active"><img src="'+ data.movies[i].image + '" alt=""></li>';
            movie += '<li><img src="'+ data.movies[i].image + '" alt=""></li>';
            movie += '<li><img src="'+ data.movies[i].image + '" alt=""></li>';
            movie += '<li><img src="'+ data.movies[i].image + '" alt=""></li>';

        }

        movieSection.querySelector('h2').insertAdjacentHTML('afterend', movie);

    }



}









//change image function
function changeImage(event) {

    //keep track of target source
    var image = event.target.src;

    //keep track of parent element holding source of image
    var parent = event.target.parentElement;

    //keep track of what is being displayed as large image
    var largeImage = document.querySelector('galleryimg');


//change image
    largeImage.src = image;

//change active indicator
    document.querySelector("#gallery.active").classList.remove("active");
    parent.className = 'active';

}


//Attach Event Listeners to all thumbnails
var thumbnails = document.querySelectorAll('.pagination img');
for(var i = 0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('click',changeImage);
}

//Change Image via Thumbnail
function changeImage(event){
    var image = event.target.src;
    var parent = event.target.parentElement;
    var largeImage = document.querySelector('#galleryimg');

    //Change Image
    largeImage.src = image;

    //Change active indicator
    document.querySelector("gallery.active").classList.remove("active");
    parent.className = 'active';
}


//Change via Next Button
function nextImage(event){


    //Find Current Image
    var thumbnails = document.querySelectorAll('.pagination li');
    var activeIndex; //js (Starts w/ 0)
    var activeListItem; //css (starts /w 1)
    for(var i=0; i < thumbnails.length; i++){

        if (thumbnails[i].className == 'active'){
            activeIndex = i;
            activeListItem = i+1;
        }
    }

    //Determine Next Image
    if (activeIndex >= 5){

        var nextIndex = 1;
        var nextListItem = 2;
    } else{
        var nextIndex = activeIndex + 1;
        var nextListItem = activeListItem + 1;
    }


    //Change Large Image
    var image = document.querySelector('.pagination li:nth-of-type('+nextListItem+ ') img').src;
    var largeImage = document.querySelector('#galleryimg');
    largeImage.src = image;

    //Change active Indicator
    document.querySelector("#gallery.active").classList.remove("active");
    var parent = document.querySelector('pagination li:nth-of-type('+nextListItem+ ')');
    parent.className = 'active';

}

//Change via Previous Button
function previousImage(event){


    //Find Current Image
    var thumbnails = document.querySelectorAll('.pagination li');
    var activeIndex; //js(starts /w 0)
    var activeListItem; //css (Starts /w 1)
    for (var i=0; i < thumbnails.length; i++){

        if (thumbnails[i].className == 'active') {

            activeIndex = i;
            activeListItem = i + 1;
        }
    }




    //Determine Previous Image
    if (activeIndex <= 1){

        var previousIndex = 5;
        var previousListItem = 6;
    } else{

        var previousIndex = activeIndex - 1;
        var previousListItem = activeListItem - 1;
    }


    //Change Large Image
    var image = document.querySelector('.pagination li:nth-of-type('+previousListItem+') img').src;
    var largeImage = document.querySelector('#galleryimg');

    largeImage = image;



    //Change active indicator
    document.querySelector("#gallery.active").classList.remove("active");
    var parent = document.querySelector('.pagination li:nth-of-type('+previousListItem+ ')');
    parent.className = 'active';

}

//Attach Event Listeners to all thumbnails
var thumbnails = document.querySelectorAll('.pagination img');
for(var i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener("click", changeImage);
}

//Attach Event to Next/Previous
var next = document.querySelector('.pagination li:last-of-type button');
next.addEventListener("click", nextImage);


var previous = document.querySelector('.pagination li:first-of-type button');
previous.addEventListener("click", previousImage);


//Call Ajax
xhr.open('GET', 'https://dennismanyagi.github.io/comic/Horror.json', true);
xhr.send(null);