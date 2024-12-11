const array =[1,2,3,4,5,6,7,8,9,11,10,12]
const newar = array.filter(isEven)
const newar2 = array.filter(isOdd)
const newar3 = array.filter(big)


function isEven(element){
    return element % 2 == 0
}
function isOdd(callback){
    return callback % 2 !== 0
}
function big(element){
    a = element >=5
    return a
}
const b=["sanjay","leo","sugumuku"]

const new1 = b.filter(weight)

function weight(element){
    return element.length == 3
}
console.log(new1)