const form = document.querySelector('input');

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

function getPost(e) {
    e.preventDefault();
fetch('https://lap1-project-backend.herokuapp.com/', options)
    .then(resp => resp.json())
    .then(post => document.getElementById("message").innerHTML = post.message)
}

form.addEventListener('click', getPost);
