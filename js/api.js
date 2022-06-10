//require('dotenv').config();

// const createPicker = require("picmo");
// const rootElement = document.querySelector('#pickerContainer');
// const picker = createPicker({ rootElement });
const userInput = document.querySelector("#post-input-container");

const userGif = document.querySelector("#add-gif");

const optionsGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

///// send userMessage to the server and renders the message on the webpage //////

function sendPost(e) {
  e.preventDefault();
  const textMessage =
    document.getElementsByClassName("textArea")[0].childNodes[0].textContent;
  console.log(document.getElementsByClassName("textArea")[0].childNodes[0]);
    
  let giphyImg = "";
  if (document.getElementById("giphyId") !== null) {
    giphyImg = document.getElementById("giphyId").src;
  }
  
  

  // const textMessage = e.target.textInput.value;
  const randomId = Math.floor(Math.random() * 4000);
  console.log(randomId);

  // let randomId;
  // const idFetch = fetch('https://lap1-project-backend.herokuapp.com/all' , optionsGet)
  //     .then(res=> res.json())
  //     .then(data => {
  //         randomId = data.length + 1
  //     })
  //     .catch(err => console.log(err))

  // console.log(randomId)

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //"Accept": "application/json"
    },
    body: JSON.stringify({
      id: randomId,
      time: new Date().toLocaleString(),
      text: textMessage,
      gif: giphyImg,
    }),
  };

  userInput.reset();

  const print = fetch(
    "https://lap1-project-backend.herokuapp.com/post",
    options
  )
    .then((res) => res.json())
    .then((data) => {
      renderMsg();
      console.log(data);
    })
    .catch((err) => console.log(err));
}

function renderMsg() {
  const test = fetch(
    `https://lap1-project-backend.herokuapp.com/all`,
    optionsGet
  )
    .then((resp) => resp.json())
    .then((data) => {
      const container = document.getElementById("submitted-post-div");

      const reverseData = data.reverse();
      const returnCards = (reverseData) => {
        return (
          '<div class="products-cards">' +
          data
            .map(
              (valueCards) => `
            <div class="product-card">
                <div class="product-headerzz">
                <div class="product-header"><p>${valueCards.text}</p>
                <div class="product-image"><img src="${valueCards.gif}" alt='no gif'></div>
                </div>
                <div id="pickerContainer" class="btn-group shadow" role="group">
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
                        
                        <form id="submit-comment-form">
                                <label for="reply-to-post" class="react">
                                    <button type="button"  class="reply-btn">Reply ...</button>
                                    <input class="hide commentText" type="text" placeholder="Enter your comment" />
                                    <input type= "submit" class="submitComment" value="submit">
                                </label>  
                        </form>
                        </div>
                </div>

            </div>`
            )
            .join("") +
          "</div>"
        );
      };

      //console.log(returnCards(data))
      container.innerHTML = returnCards(data);
      var buttons = document.querySelectorAll(".reply-btn");
        var i = 0, length = buttons.length;
        for (i; i < length; i++) {
            buttons[i].addEventListener("click", function() {
                //get access to "this" keyword
                let input = this.nextElementSibling;
                console.log(input)
                input.style.visibility = "visible";
                document.querySelector(".submitComment").style.visibility = "visible";
             });
        };
    })


    .catch((err) => console.log(err));
}

renderMsg();
userInput.addEventListener("submit", sendPost);

function addGif(gif) {
  const response = fetch(
    `https://api.giphy.com/v1/gifs/search?${process.env.GIPHY_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        api_key: process.env.GIPHY_API_KEY,
        random_id: "",
        ts: integer,
        q: "",
        rating: "g",
        limit: 5,
      },
    }
  );
  return response.json();
}

// userMessage.addEventListener('click', getPost);
userInput.addEventListener('submit', sendPost);

userGif.addEventListener("click", addGif);


// picker.addEventListener('emoji:select', event => {
//   console.log('Emoji selected:', event.emoji);
// });

// function onButtonClick (e) {
//     e.preventDefault();
//     console.log("words test")
//     document.getElementById('reply-to-post').className = "show";

// }

// const clickComment = document.querySelector("#reply-to-post")

// clickComment.addEventListener("onclick", onButtonClick)
