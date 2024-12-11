


class product{
    constructor(name,price){
        this.name = name
        this.price = price
    }

    displayproduct(){
        console.log(`Product Name is ${this.name}`)
        console.log(`Product Price is ${this.price}`)
    }
    calculate(tax){
        return this.price + (this.price * tax)
    }
}

const product1 = new product ( "Shooe" , 250 )
const product2 = new product ( "Shirt" , 500 )

const tax = 0.5
let total=product1.calculate(tax)
console.log(total)
product1.displayproduct()
product2.displayproduct()