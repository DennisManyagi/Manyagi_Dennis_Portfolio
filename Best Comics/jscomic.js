//use ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function(){
    //save JSON data
    var data = JSON.parse(xhr.responseText);




    //Insert the HTML articles & into section ( insertAdjacentHTML)

    var comicsSection = document.querySelector('#blog');
    if (comicsSection){

        var comics = '';
        
        for (var i = 0; i < data.comics.length; i++){


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


}




//Call Ajax
xhr.open('GET', 'https://dennismanyagi.github.io/comic/comics.json', true);
xhr.send(null);