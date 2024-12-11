// Nested objects are objects that contain other objects as values. 
// These objects can be nested at any depth, and you can access the properties of these nested objects using dot or bracket notation.

const sugumuku = {
    "name": "Sugumuku",
    "age":20,
    "partner":"Arun",
    "friends":["sanjay","vishva","Sajin"],
    "address":{
        "street":"unknown",
        "city":"Namakkal",
        "HouseNo":1234
    }

}

// console.log(sugumuku.address.city)
// console.log(sugumuku.friends[1])
// console.log(sugumuku.friends)

// for(let property in sugumuku.address){
//     console.log(sugumuku.address[property])
// }
// for(let property in sugumuku.friends){
//     console.log(sugumuku.friends[property])
// }

class sugumuku2{
    constructor(name,age,partner,address){
        this.name=name
        this.age = age
        this.partner = partner
        this.address=new Address(...address)
}
}

class Address{
    constructor(street,city,HouseNo){
        this.street=street
        this.city=city
        this.HouseNo = HouseNo
    }
}

const person1 = new sugumuku2("sanjay",20,"Dharani❤️",["Schoolstreet","karungalapalli",11_304])
console.log(person1.address.city)
console.log(person1.address)
console.log(person1.name)
