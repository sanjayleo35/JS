// JSON (JavaScript Object Notation)
// JSON is a data-interchange format.
// It is commonly used for exchanging data between a server and a web application.
// JSON organizes data as:
// Key-value pairs (for objects): { "key": "value" }
// Arrays: [value1, value2, value3]

// JSON.stringify(): Converts a JavaScript object into a JSON string.
// JSON.parse(): Converts a JSON string back into a JavaScript object.


const names = ["sanjay","dharu","siva","rama","vishva"]
const jsonString = JSON.stringify(names)


// console.log(names)
// console.log(jsonString)

const person = {
    "name":"sanjay",
    "age": 23,
    "profession":"student",
    "hobbies":["cricket","gaming","fun"]
}

const jsonString1 = JSON.stringify(person)

// console.log(person)
// console.log(jsonString1)

const people = [
    {
        "name":"sanjay",
        "age": 23,
        "profession":"student",
        "isEmployee":true
    },

    {
        "name":"Dharu",
        "age": 17,
        "profession":"student",
        "isEmployee":false
    },

    {
        "name":"siva",
        "age": 22,
        "profession":"student",
        "isEmployee":true
    },

    {
        "name":"Rama",
        "age": 22,
        "profession":"student",
        "isEmployee":true
    }

]

const jsonString2 = JSON.stringify(people)

// console.log(people)
// console.log(jsonString2)

const jsonNames =` ["sanjay","dharu","siva","rama","vishva"] `

const jsonPerson =`{    "name":"sanjay",    
                        "age": 23,
                        "profession":"student",
                        "hobbies":["cricket","gaming","fun"]
                    }`

const jsonPeople = `[{
        "name":"sanjay",
        "age": 23,
        "profession":"student",
        "isEmployee":true
    },

    {
        "name":"Dharu",
        "age": 17,
        "profession":"student",
        "isEmployee":false
    },

    {
        "name":"siva",
        "age": 22,
        "profession":"student",
        "isEmployee":true
    },

    {
        "name":"Rama",
        "age": 22,
        "profession":"student",
        "isEmployee":true
    }

]`

const parseddata = JSON.parse(jsonNames)
const parseddata1= JSON.parse(jsonPeople)
const parseddata2= JSON.parse(jsonPerson)


// console.log(parseddata)
// console.log(parseddata1)
// console.log(parseddata2)



// ------------------------- Fetching Data ----------------------------------------

fetch("name.json")
    .then(Response => Response.json())
    .then(value => console.log(value))

    
fetch("person.json")
    .then(Response => Response.json())
    .then(value => console.log(value))
    
fetch("people.json")
    .then(Response => Response.json())
    // .then(values => values.forEach(value =>console.log(value)))
    // .then(values => values.forEach(value =>console.log(value.name)))
    .then(values => values.forEach(value =>console.log(value.age)))
    .catch(error => console.error(error))
