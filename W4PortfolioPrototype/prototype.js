// Pick an open source API you can pull from.
// https://jsonplaceholder.typicode.com/posts

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) =>{

            let output = '<h2 class="mb-4">Movie Goers</h2>';
            console.log(data);
            data.forEach(function(user){

                output += `
                <ul class="list-group mb-3">
                <li class="list-group-item"> ID: ${user.id}</li>
                <li class="list-group-item"> Name: ${user.name}</li>
                <li class="list-group-item"> Contact Info: ${user.email}</li>
</ul>`;

            });

            document.getElementById('output').innerHTML = output;
        })



}

document.getElementById('getUsers').addEventListener('click',getUsers);
document.getElementById('getMovies').addEventListener('click',getMovies);
document.getElementById('getReviews').addEventListener('click',getReviews);


// Match your selected Theme for the month (sharks, travel app,  web design, etc).
// Use valid ES6 Fetch Syntax to connect to and retrieve 3 different types of data.
// Page must contain at least 1 Page title (H1) heading the page content.
// For example, upcoming weather, User names, Location title, etc.
// Must pull at least two (2) different images down to your page.

function getMovies(){
    fetch('https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json')
        .then((response) => response.json())
        .then((data) =>{

            let output = '<h2 class="mb-4">Movies</h2>';
            console.log(data);
            data.forEach(function(movies){

                output += `
                <ul class="list-group mb-3">
                <li class="list-group-item"> Name: ${movies.title}</li>
                <li class="list-group-item"> Year: ${movies.year}</li>
                <li class="list-group-item"> Story: ${movies.storyline}</li>
                <li class="list-group-item"><img src="${movies.posterurl}"></li>
</ul>`;

            });

            document.getElementById('output').innerHTML = output;
        })



}

// Retrieve text based data from the API

function getReviews(){
    fetch('https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json')
        .then((response) => response.json())
        .then((data) =>{

            let output = '<h2 class="mb-4">More Info</h2>';
            console.log(data);
            data.forEach(function(post){

                output += `
                <ul class="list-group mb-3">
                
                <li class="list-group-item"> Name: ${post.title}</li>
                <li class="list-group-item"> Genre: ${post.genres}</li>
                <li class="list-group-item"> Actors: ${post.actors}</li>
                <li class="list-group-item"> Rating: ${post.imdbRating}</li>
                <li class="list-group-item"> Release: ${post.releaseDate}</li>
                <li class="list-group-item"><img src="${post.posterurl}"></li>
                
</ul>`;

            });

            document.getElementById('output').innerHTML = output;
        })



}

