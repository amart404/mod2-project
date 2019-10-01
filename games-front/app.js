let i = 0
let text = "orking Title"
const title = document.querySelector(".title")
let speed = 200;
const select = document.querySelector("#genre")
const userForm = document.querySelector(".input-user")
const gameForm = document.querySelector(".search-game")


// setTimeout(typeEffect, 500)

function typeEffect() {
    if (i < text.length){
        title.innerHTML += text.charAt(i);
        i++
        setTimeout(typeEffect, speed)
    }
}

typeEffect();

userForm.addEventListener("submit", ()=> {
    userForm.classList.toggle("hidden")
    gameForm.classList.toggle("shown")
})

function addOption(genres){
    genres.forEach(genre => {
        option = document.createElement("option")
        option.innerHTML = genre.name
        select.append(option)
    })
}



fetch("http://localhost:3000/genres")
    .then(response => response.json())
    .then(addOption)