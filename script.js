const ji = document.getElementById("s-joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        ji.textContent = `${item.joke}`;
    });
}
btn.addEventListener("click", getjoke);
getJoke();