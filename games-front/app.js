let i = 0
let text = "etter Than Steam"
const title = document.querySelector(".title")
let speed = 150;
const select = document.querySelector("#genre")
const userForm = document.querySelector(".input-user")
const gameForm = document.querySelector(".search-game")
const button = document.querySelector("#button")


setTimeout(typeEffect, 100)

function typeEffect() {
    if (i < text.length){
        title.innerHTML += text.charAt(i);
        i++
        setTimeout(typeEffect, speed)
    }
}

// typeEffect();

// userForm.addEventListener("submit", ()=> {
//     window.location.href = 'http://localhost:5500/games-front/search.html';
// })
