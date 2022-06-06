const userMessage = document.querySelector("#form");
const userInput = document.querySelector("#inputText");

const optionsGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

// const optionsPost = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     //"Accept": "application/json"
//   },
//   body: JSON.stringify({
//     id: 27,
//     time: 13.0,
//     text: body,
//   }),
// };

function getPost(e) {
  console.log(e);
  e.preventDefault();

  fetch("https://lap1-project-backend.herokuapp.com/", optionsGet)
    .then((resp) => resp.json())
    .then((data) => (document.getElementById("message").innerHTML = data.text));
}

function sendPost(e) {
  e.preventDefault();
  let body = document.querySelector("#usertext").value;
  console.log(body);
  console.log(e);
  fetch("https://lap1-project-backend.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //"Accept": "application/json"
    },
    body: JSON.stringify({
      id: 30,
      time: 13.0,
      text: body,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

userMessage.addEventListener("click", getPost);
userInput.addEventListener("submit", sendPost);
