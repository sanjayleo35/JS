// Number Guessing Game

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;

function guessNumber() {
    const userInput = document.getElementById('userInput').value;
    const resultMessage = document.getElementById('resultMessage');
    const attemptsMessage = document.getElementById('attemptsMessage');
    
    if (userInput === '') {
        resultMessage.textContent = "Please enter a number!";
        return;
    }

    let userGuess = parseInt(userInput);
    attempts++;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        resultMessage.style.color = 'green';
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = `Too high!`;
        resultMessage.style.color = 'orange';
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = `Too low!`;
        resultMessage.style.color = 'orange';
    }

    attemptsMessage.textContent = `Attempts: ${attempts} / ${maxAttempts}`;

    if (attempts >= maxAttempts) {
        resultMessage.textContent = `Game Over! The number was ${randomNumber}.`;
        resultMessage.style.color = 'red';
        disableInput();
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('userInput').value = '';
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('attemptsMessage').textContent = '';
    enableInput();
}

function disableInput() {
    document.getElementById('userInput').disabled = true;
}

function enableInput() {
    document.getElementById('userInput').disabled = false;
}
