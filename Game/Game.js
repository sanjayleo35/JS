const choices = ["Rock", "Paper", "Scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore= document.getElementById("computerScore");

let playerScores = 0
let computerScores = 0

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "You Win!" : "You lose!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You Win!" : "You lose!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "You Win!" : "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("green","red")


    switch(result){
        case "You Win!":
            resultDisplay.classList.add("green")
            playerScores++;
            playerScore.textContent = playerScores
            break;
        case "You lose!":
            resultDisplay.classList.add("red")
            
            computerScores++;
            computerScore.textContent = computerScores
            break;
    }
}
