const form = document.querySelector('input');

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

async function getPost(e) {
    try{ 
        e.preventDefault();
        await fetch('https://lap1-project-backend.herokuapp.com/1', options)
        .then(resp => resp.json())
        .then(post => document.getElementById("message").innerHTML = post.text)
    } catch {
        console.log("error")
    }
}


form.addEventListener('click', getPost);
