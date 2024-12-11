// Error handling in JavaScript ensures that your code can gracefully deal with unexpected problems.
// JavaScript provides a mechanism for catching errors and executing code that can handle them, preventing the program from crashing.
// The most common way to handle errors in JavaScript is by using try...catch blocks

// try{
//     console.log(sanjay)
// }
// catch{
//     console.error("your code has error")
// }
// finally{
//     console.log("finally")
// }


try {
    const a = window.prompt(`Enter the 1st value:  `);

    if (isNaN(a) || a === '') {
        throw new Error("First input is not a number!");
    }

    const b = window.prompt(`Enter the 2nd value:  `);

    if (isNaN(b) || b === '') {
        throw new Error("Second input is not a number!");
    }

    if (b == 0) {
        throw new Error("Zero division error!");
    }

    const answer = a / b;
    console.log(answer);
}
catch (error) {
    console.error(error);
}
finally {
    console.log("Finally executed");
}
