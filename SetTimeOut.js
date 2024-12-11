// The setTimeout function in JavaScript is used to execute a function or a piece of code after a specified delay (in milliseconds).
// It only runs the function once after the delay, unlike setInterval, which repeats the execution at regular intervals.

// Syntax:
// setTimeout(function, delay, arg1, arg2, ...)

const timeID=setTimeout(()=>window.alert("VANAKAM"),2000)
clearTimeout(timeID)