//require('dotenv').config();


const userGif = document.querySelector('#add-gif');

const userInput = document.querySelector('#post-input-container');

const optionsGet = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}


function sendPost(e) {

    e.preventDefault();
    const textMessage = e.target.textInput.value;
    const randomId = Math.floor(Math.random() * 4000);
    console.log(randomId);

    // const randomId = fetch('https://lap1-project-backend.herokuapp.com/' , optionsGet)
    //                 .then(res=> res.json())
    //                 .then()


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
    
    
    userInput.reset();
    
    const print = fetch('https://lap1-project-backend.herokuapp.com/', options)
    .then(res => res.json())
    .then(data => {
        renderMsg()
        console.log(data)
    })
    .catch(err => console.log(err))

    
    
    
    
}

function renderMsg(){

const test = fetch(`https://lap1-project-backend.herokuapp.com/`, optionsGet)
    .then(resp => resp.json())
    .then(data => {
        const container = document.getElementById('submitted-post-div');
           
    const reverseData = data.reverse()
        const returnCards =  (reverseData) => {
            return "<div class=\"products-cards\">" + data.map(valueCards => `
            <div>
                <div class="product-headerzz">
                <div class="product-header"><p>${valueCards.text}</p></div>
                <div class="btn-group shadow" role="group">
                    <input type="checkbox" id="r1" class="btn">
                        <label for="r1" class="react">
                            <i data-icon="🤣"></i>                                
                        </label>
                        <input type="checkbox" id="r2" class="btn">
                        <label for="r2" class="react">
                            <i data-icon="😃"></i>                                
                        </label>   
                        <input type="checkbox" id="r3" class="btn">
                        <label for="r3" class="react"> 
                            <i data-icon="😮"></i>
                        </label>

                        <form id="form">
                            <input id="getPost" type="submit" value="get post">
                                <label for="reply-to-post" class="react">       
                                    <button type="button" id="reply-to-post" class="reply-btn">Reply ...</button>
                                </label>   
                        </form>
                </div>
                </div>

            </div>`).join('') + "</div>";
                
        }
        //console.log(returnCards(data))
        container.innerHTML = returnCards(data)
    })

    .catch(err => console.log(err))

}

renderMsg()
userInput.addEventListener('submit', sendPost);

function addGif(gif) {
    const response = fetch(`https://api.giphy.com/v1/gifs/search?${process.env.GIPHY_API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: ({
            api_key: process.env.GIPHY_API_KEY,
            random_id: "",
            ts: integer,
            q: "",
            rating: "g",
            limit: 5,

        }),
    });
    return response.json();
}
        


//userMessage.addEventListener('click', getPost);
userInput.addEventListener('onClick', sendPost);
userGif.addEventListener('click', addGif);
