// Getters
// A getter is a method that gets the value of a specific property. You define a getter using the get keyword followed by a method name.

// Setters
// A setter is a method that sets the value of a specific property. You define a setter using the set keyword followed by a method name.

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(new_width){
        if(typeof new_width === "number" && new_width>0){
            this._width = new_width
    }
        else{
            console.error("Enter a positive number");
            
        }
}
    set height(new_height){
        if( typeof new_height === "number" && new_height>0){
            this._height = new_height
    }
        else{
            console.error("Enter a positive number");
            
        }
}
get width(){
    return this._width;
}
get height(){
    return this._height;
}

get area(){
    return this.width * this.height
}
}

const angle = new Rectangle(9,6)
console.log(angle.width); 
console.log(angle.height);
console.log(angle.area);