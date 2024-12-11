
const emoji = document.getElementById("emoji")

// document.addEventListener("keydown",event =>{

//     emoji.textContent = "😊"
//     emoji.style.backgroundColor = "violet"
// })


// document.addEventListener("keyup",event =>{

//     emoji.textContent = "😉"
//     emoji.style.backgroundColor = "purple"
// })

const movement = 10
let x = 0
let y = 0

document.addEventListener("keydown",event =>{

    if(event.key.startsWith("Arrow")){

        event.preventDefault()

        switch(event.key){
            case "ArrowUp":
                y -= movement;
                break;
            
            case "ArrowDown":
                y += movement;
                break;

            case "ArrowLeft":
                x -= movement;
                break;
            
            case "ArrowRight":
                x += movement;
                break;
        }


        emoji.style.top = `${y}px`
        emoji.style.left = `${x}px`
    }
})