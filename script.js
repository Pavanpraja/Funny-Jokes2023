const ji = document.getElementById("s-joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () =>{
    ji.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        ji.textContent = `${item.joke}`;
        ji.classList.add("fade");
    });
}
btn.addEventListener("click", getJoke);
getJoke();