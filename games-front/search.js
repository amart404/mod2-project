const login = document.querySelector("#login")
const title = document.querySelector("#searchTitle")
const body = document.body
const gFilter= document.querySelector("#genre")
const pFilter = document.querySelector("#platform")
const submit = document.querySelector("#button")
let mockModel = []
let gResult = ""
let pResult = ""

function getLastUser(users){
    const givenUser = users.slice(-1)[0]
    login.innerHTML = `<a href="http://localhost:5500/games-front/index.html">Not ${givenUser.name}? </a>`
    title.textContent = `Hello, ${givenUser.name}!`
}



gFilter.addEventListener("change", (filter) => {
    gResult = filter.target.value
})

pFilter.addEventListener("change", (filter) => {
    pResult = filter.target.value
})

submit.addEventListener("click", event => {
    event.preventDefault()
    createCards(mockModel)
})

function createCards(games){
    let h2 = document.createElement("h2")
    let div = document.createElement("div")
    body.innerHTML = ""
    h2.innerText = "Recommendations"
    div.className = "cards"
    games.filter(game => game.genre != null).forEach(game => {
        let h3 = document.createElement("h3")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        if (game.genre.includes(gResult) && game.platform.toLowerCase().includes(pResult)) {
            h3.innerText = game.name
            p1.innerText = `Rating: ${game.rating}`
            p2.innerText = `Genre: ${game.genre}`
            p3.innerText = `Platform: ${game.platform}`
            p4.innerText = `Summary: ${game.summary}`
        }
        div.append(h3, p1, p2, p3, p4)
    })
    body.append(h2, div)
}

function makeModel(models){
    mockModel = models
}

fetch(`http://localhost:3000/games/`)
    .then(response => response.json())
    .then(result => makeModel(result))


fetch(`http://localhost:3000/users/`)
    .then(response => response.json())
    .then(user => getLastUser(user))