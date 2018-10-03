//use ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function(){
    //save JSON data
    var data = JSON.parse(xhr.responseText);




    //Insert the HTML articles & into section ( insertAdjacentHTML)

    var comicsSection = document.querySelector('#blog');
    if (comicsSection){

        //create variable to store data
        var comics = '';


        //loop through each JSON object
        for (var i = 0; i < data.comics.length; i++){


            //format HTML with encapsulated variables
            comics += '<article>';
            comics += '<p class = "thumbnail"><img src =" '+ data.comics[i].image + '"alt="' + data.comics[i].location+ '"></p>';

            comics += '<h3>' + data.comics[i].location + '</h3>';
            comics += '<h4 class = "location">' + data.comics[i].city+','+ data.comics[i].state + '</h4>';
            comics += '<p>'+data.comics[i].description+'</p>';
            comics += '<p><meter min="0" max ="5" value ="'+data.comics[i].rating +'">' + data.comics[i].rating+ 'out of 5</meter><a href="/rate">Rate it</a></p>';


            comics += '<dl>';

            comics += '<dt>Volume</dt>';
            comics += '<dd>'+data.comics[i].volume +   '</dd>'


            comics += '<dt>Issue</dt>';
            comics += '<dd>'+data.comics[i].issue +   '</dd>'

            comics += '<dt>Release Date</dt>';
            comics += '<dd>'+data.comics[i].release+   '</dd>'

            comics += '<dt>Read More</dt>';
            comics += '<dd><p><a href="'+data.comics[i].link+'" target="_blank">View Info</a></p></dd>'




            comics += '</dl>';



            comics += '</article>';



        }



        comicsSection.querySelector('h2').insertAdjacentHTML('afterend', comics);



    }

    //change load button link to new page
    var change = document.getElementById("load");

    //use href property to change link
    change.href = "https://geeks.media/the-10-greatest-comic-book-stories-of-all-time";

}




//Call Ajax
xhr.open('GET', 'https://dennismanyagi.github.io/comic/comics.json', true);
xhr.send(null);




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