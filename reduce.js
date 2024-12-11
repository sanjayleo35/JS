const sales = [10,20,30,40,50]

const total = sales.reduce(sum)
const total1= sales.reduce(max)

console.log(total)
console.log(total1)
function sum(first,element){
    return first + element;
}
function max(first,next){
    return Math.max(first,next)
}