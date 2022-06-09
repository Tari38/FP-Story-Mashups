//const form = document.querySelector()
// U+1F92A	zany face emoji
// U+1F923	rofl emoji
// U+1F60E	 sunglasses emoji
// const require = require("browserify");
// require("dotenv").config();

<<<<<<< HEAD
function init(cats) {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }  
        
        document.getElementById('gifSearch').addEventListener('submit', e => {
            e.preventDefault();
    
        let str = document.getElementById("searchGif").value.trim();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=FlLcKnBPn6Wpd1tyqGXPsXj8WEbOhCYQ&q=${str}&limit=1&offset=0&rating=g&lang=en`;
        // url = url.concat(str);
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then(content => {
                console.log(content);
                // data, pagination, meta
                // console.log(content.data.url);
                console.log("META", content.meta);
                let fig = document.createElement("figure");
                let img = document.createElement("img");
                let fc = document.createElement("figcaption");
                let textInput = document.querySelector("#textInput");
                img.src = content.data[0].images.downsized.url;
                img.alt = content.data.title;
                fc.textContent = content.data.title;
                fig.appendChild(img);
                fig.appendChild(fc);
                textInput.insertAdjacentElement("afterbegin", fig);
                document.querySelector("#searchGif").value = '';
                return content
=======
function init() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  document.getElementById("gifSearch").addEventListener("submit", (e) => {
    e.preventDefault();
>>>>>>> 67fbe844cb9e6d7de4668ffceeb92c923628330b

    let str = document.getElementById("searchGif").value.trim();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=FlLcKnBPn6Wpd1tyqGXPsXj8WEbOhCYQ&q=${str}&limit=1&offset=0&rating=g&lang=en`;
    // url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((content) => {
        console.log(content);
        // data, pagination, meta
        // console.log(content.data.url);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        let textInput = document.querySelector("#textInput");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data.title;
        img.id = "giphyId";
        fc.textContent = content.data.title;
        fig.appendChild(img);
        fig.appendChild(fc);
        textInput.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#searchGif").value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
document.addEventListener("DOMContentLoaded", init);
