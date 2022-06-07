// const { v4: uuidv4} = require("uuid")

// userId = uuidv4()

//const userMessage = document.querySelector('#form');
const userInput = document.querySelector('#post-input-container');

const optionsGet = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

// const optionsPost = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         //"Accept": "application/json"
//     },
//     body: JSON.stringify({
//         id : 15,
//         time: 13.00,
//         text: 'Enter message here'
//     })
// }


// const message = document.getElementById("message")


// async function getPost(e) {

//         e.preventDefault();
//         console.log(e.target);
//         //optionsPost.body.text = JSON.stringify(e.body)
//        const test = fetch('https://lap1-project-backend.herokuapp.com/1', optionsGet)
//         .then(resp => resp.json())
//         .then(data => data.text)

//         .catch(err => console.log(err))
//         message.textContent = await test
        
// }

// userMessage.addEventListener('submit', getPost);

/////////////Posting data//////////

const message = document.getElementById("message")

function sendPost(e) {

    const textMessage = e.target.textInput.value;
    const randomId = Math.floor(Math.random() * 4000);
    console.log(randomId);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //"Accept": "application/json"
        },
        body: JSON.stringify({
            id : randomId,
            time: new Date().toLocaleString(),
            text: textMessage
        })
    }
    
    e.preventDefault();
    userInput.reset();
    //console.log(e.target)
    const print = fetch('https://lap1-project-backend.herokuapp.com/', options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))



    const test = fetch(`https://lap1-project-backend.herokuapp.com/`, optionsGet)
    .then(resp => resp.json())
    .then(data => {
        let newUl = document.createElement('ul')
        data.forEach((datazz) => {
            let li = document.createElement('li')
            li.textContent = datazz.text
            newUl.appendChild(li)
        });
        const app = document.querySelector('#submitted-post')
        app.appendChild(newUl)
    })
        //let results;
        // const pTag = document.createElement("p");

        // for(let i = 0; i < data.length; i++) {
            
        //     const contents = document.createTextNode(`${data[i].text}`);
        //     pTag.appendChild(contents);
            
        // }
        // return message.textContent = pTag.value
    
        //message.textContent = data.text})

    .catch(err => console.log(err))
    //message.textContent = test


   
}

userInput.addEventListener('submit', sendPost);
