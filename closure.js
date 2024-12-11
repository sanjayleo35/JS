// In JavaScript, a closure is a function that "remembers" its lexical scope even when the function is executed outside that scope.
// Closures give functions access to variables from their outer (enclosing) function's scope even after the outer function has finished executing.
// This allows for powerful features like private variables and function factories.

function outer(){
    let variable = "I am  outer"
    function inner(){
        console.log(variable);
    }

    inner()
}
 
// variable = "changed"

// outer()

function Counter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`count is increased ${count}`)
    }

    function getcount(){
        console.log(`count is ${count}`)
    }
   return {increment,getcount}
}

const counter = Counter()
counter.increment()
counter.increment()
counter.getcount()
// counter.increment()
// counter.increment()
// counter.increment()


function CreateGame(){
let score = 0
function increaseScore (points){
    score +=points
    console.log(`+${points}pts`)
}

function decreaseScore(points){
    score -= points
    console.log(`-${points}pts`)
}
function getscore(){
    return score
}

return {increaseScore,decreaseScore,getscore}
}

const Game = CreateGame()
Game.increaseScore(5)
Game.increaseScore(5)
Game.decreaseScore(9)
console.log(`Total points are ${Game.getscore()}`)
