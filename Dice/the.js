function Rolldice(){
    
    const numOfDice = document.getElementById("numOfDice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimg = document.getElementById("diceimg");
    const values = [];
    const image = [];

    for(let i =0; i<numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        image.push(`<img class="dice" src="img/${value}.png" alt='Dice ${value}'>`);

    }
    diceresult.textContent = `dice: ${values.join(', ')}`
    diceimg.innerHTML = image.join('')
}