require('dotenv').config();

const userMessage = document.querySelector('#form');
const userInput = document.querySelector('#post-input-container');
const userGif = document.querySelector('#add-gif');

const optionsGet = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

const optionsPost = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        //"Accept": "application/json"
    },
    body: JSON.stringify({
        id : 15,
        time: 13.00,
        text: 'Enter message here'
    })
}

function getPost(e) {
     
        e.preventDefault();
        optionsPost.body.text = JSON.stringify(e.body)
         fetch('https://lap1-project-backend.herokuapp.com/', optionsGet)
        .then(resp => resp.json())
        .then(data => document.getElementById("message").innerHTML = data.text)
    
}

function sendPost(e) {
    
        e.preventDefault();
        console.log(e.body)
         fetch('https://lap1-project-backend.herokuapp.com/', optionsPost)
        .then(res =>{
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
    
}

function addGif(gif) {
    const response = fetch(`https://api.giphy.com/v1/gifs/search?${process.env.GIPHY_API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: ({
            api_key: process.env.GIPHY_API_KEY,
            random_id: "",
            ts: int,
            q: "",
            rating: "g",
            limit: 5,

        }),
    });
    return response.json();
}
        


userMessage.addEventListener('click', getPost);
userInput.addEventListener('submit', sendPost);
userGif.addEventListener('click', addGif);
