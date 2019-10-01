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
        let p = document.createElement("p")
        let a = document.createElement("a")
        let a2 = document.createElement("a")

        div.append(h3, p, a, a2)
    })

    body.append(h2, div)
}

fetch(`http://localhost:3000/games/${query1}&${query2}`)
    .then(response => response.json())
    .then(createCards)