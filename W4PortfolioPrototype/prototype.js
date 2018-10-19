// Pick an open source API you can pull from.
// https://jsonplaceholder.typicode.com/posts

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) =>{

            let output = '<h2 class="mb-4">Users</h2>';
            console.log(data);
            data.forEach(function(user){

                output += `
                <ul class="list-group mb-3">
                <li class="list-group-item"> ID: ${user.id}</li>
                <li class="list-group-item"> Name: ${user.name}</li>
                <li class="list-group-item"> Email: ${user.email}</li>
</ul>`;

            });

            document.getElementById('output').innerHTML = output;
        })



}

document.getElementById('getUsers').addEventListener('click',getUsers);
/*

// Match your selected Theme for the month (sharks, travel app,  web design, etc).
// Use valid ES6 Fetch Syntax to connect to and retrieve 3 different types of data.
// Page must contain at least 1 Page title (H1) heading the page content.
// For example, upcoming weather, User names, Location title, etc.
// Must pull at least two (2) different images down to your page.

function getPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) =>{

            let output = '<h2 class="mb-4">Users</h2>';
            console.log(data);
            data.forEach(function(user){

                output += `
                <ul class="list-group mb-3">
                <li class="list-group-item"> ID: ${user.id}</li>
                <li class="list-group-item"> Name: ${user.name}</li>
                <li class="list-group-item"> Email: ${user.email}</li>
</ul>`;

            });

            document.getElementById('output').innerHTML = output;
        })



}

// Retrieve text based data from the API

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) =>{

            let output = '<h2 class="mb-4">Posts</h2>';
            console.log(data);
            data.forEach(function(post){

                output += `<div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>



                    </div>
                `;

            });

            document.getElementById('output').innerHTML = output;
        })



}

*/