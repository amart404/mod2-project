const login = document.querySelector("#login")
const title = document.querySelector("#searchTitle")

function getLastUser(users){
    const givenUser = users.slice(-1)[0]
    login.innerHTML = `<a href="http://localhost:5500/games-front/index.html">Not ${givenUser.name}? </a>`
    title.textContent = `Hello, ${givenUser.name}!`
}


fetch(`http://localhost:3000/users/`)
    .then(response => response.json())
    .then(user => getLastUser(user))