const searchParams = new URLSearchParams(window.location.search)
const query1 = searchParams.get("genre")
const query2 = searchParams.get("platform")
const body = document.body 

function createCards(games){
    let h2 = document.createElement("h2")
    let div = document.createElement("div")

    h2.innerText = "Recommendations"
    div.className = "cards"

    games.forEach(game => {
        let h3 = document.createElement("h3")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")

        h3.innerText = game.name
        p1.innerText = `Rating: ${game.rating}`
        p2.innerText = `Genre: ${game.genre}`
        p3.innerText = `Platform: ${game.platform}`
        p4.innerText = `Summary: ${game.summary}`

        div.append(h3, p1, p2, p3, p4)
    })

    body.append(h2, div)
}

fetch(`http://localhost:3000/games/${query1}&${query2}`)
    .then(response => response.json())
    .then(createCards)