function Car(model,year,color){
    this.model = model,
    this.color = color,
    this.year = year
    this.drive = function(){console.log(`You'r now driving the ${this.model}`)}
}
const car1 = new Car( "Thor" , 2008 , 'Black')
const car2 = new Car( "Audi" , 2003 , 'Silver')

console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
car1.drive()


console.log(car2.model)
console.log(car2.year)
console.log(car2.color)
car2.drive()
