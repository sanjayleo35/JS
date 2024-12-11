// Fetch in JavaScript
// Purpose:
// Fetch is a modern function used for making HTTP requests to fetch resources such as JSON data, images, or files.

// Key Features:

// Simplifies asynchronous data fetching in JavaScript.
// Used for interacting with APIs to retrieve and send data asynchronously over the web.





// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     // .then(Response => console.log(Response))
//     .then(Response => {

//         if(!Response.ok){
//             throw new Error("Couldn't find!")
//         }
//         return Response.json()
//     })
//     // .then(data => console.log(data))
//     .then(data => console.log(data.weight))
//     .catch(error => console.error(error))


async function fetchData() {

    try{

        const pokemonName = document.getElementById("Pokemon").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Couldn't find!")
        }

        const data = await response.json()
        const PokemonSprite = data.sprites.front_default
        const imageElement = document.getElementById("pokemonimg")

        imageElement.src = PokemonSprite;
        imageElement.style.display = "block"
        
    }
    catch(error){
        console.error(error)
    }
    
}