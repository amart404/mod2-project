const login = document.querySelector("#login")
const title = document.querySelector("#searchTitle")
const body = document.body
const gFilter= document.querySelector("#genre")
const pFilter = document.querySelector("#platform")
const submit = document.querySelector("#button")
let mockModel = []
let gResult = ""
let pResult = ""
let givenUser = ""

function getLastUser(users){
    givenUser = users.slice(-1)[0]
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
    const div3 = document.createElement("div")
    body.innerHTML = ""
    div3.innerHTML = `
        <nav id="searchNav">
            <ul>
                <li id="brand"><a href="http://localhost:5500/games-front/index.html">Better Than Steam</a></li>
                <div class="main-nav">
                        <li><a href="http://localhost:5500/games-front/index.html"><abbr title="Go back to home">Home</abbr></a></li>
                        <li><a href="http://localhost:5500/games-front/about.html">About</a></li>
                        <li><a href="http://localhost:5500/games-front/search.html">Back to Search Page</a></li>
                </div>
            </ul>
        </nav>`
    h2.innerText = "Recommendations"
    div.className = "cards"
    games.filter(game => game.genre != null).forEach(game => {
        let div2 = document.createElement("div")
        let h3 = document.createElement("h3")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        let p5 = document.createElement("p")

        if (game.genre.includes(gResult) && game.platform.toLowerCase().includes(pResult)) {
            h3.innerText = game.name
            div2.classList.add("game")
            p1.classList.add("game-info")
            p2.classList.add("game-info")
            p3.classList.add("game-info")
            p4.classList.add("game-info")            
            p1.innerText = `Rating: ${game.rating}%`
            p2.innerText = `Genre: ${game.genre}`
            p3.innerText = `Platform: ${game.platform}`
            p4.innerText = `Summary: ${game.summary}`
        }
        div2.append(h3, p1, p2, p3, p4)

        div.appendChild(div2)
    })
    body.append(div3, h2, div)
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