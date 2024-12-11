// Example1------------------------------------------------------------------------------------------------------------->

// create the Element---------------------------------------

        // const newh1 = document.createElement('h1')

// Add attribute/ property----------------------------------

        // newh1.textContent = "Hello, World!"
        // newh1.id = "myh1"
        // newh1.style.color = "yellow"
        // newh1.style.textAlign = "center"

// Append Element to DOM------------------------------------

        // document.body.append(newh1)
        // document.body.prepend(newh1)
        // document.getElementById("Box1").append(newh1)
        // document.getElementById("Box1").prepend(newh1)

        // document.body.insertBefore(newh1, Box2)

        // const boxes = document.querySelectorAll(".Box")
        // document.body.insertBefore(newh1,boxes[4])

// Remove HTML Element--------------------------------------

        //  document.body.removeChild(newh1)
        // document.getElementById("Box1").removeChild(newh1)

// Example2------------------------------------------------------------------------------------------------------------->

// create the Element---------------------------------------
const newlistitem = document.createElement("li")

// Add attribute/ property----------------------------------

newlistitem.textContent = "Coconut"
newlistitem.id = "Coconut"
newlistitem.style.backgroundColor = "lightyellow"
newlistitem.style.fontWeight = "bold"

// Append Element to DOM------------------------------------

        // document.body.append(newlistitem)
        // document.body.prepend(newlistitem)
        // document.getElementById("Fruit").append(newlistitem)
        // document.getElementById("Fruit").prepend(newlistitem)
        // const Mango  = document.getElementById("Mango") 
        // document.getElementById("Fruit").insertBefore(newlistitem,Mango)
        // document.getElementById("Fruit").insertBefore(newlistitem,document.getElementById("Apple"))

        // const listitem  = document.querySelectorAll("#Fruit li")
        // document.getElementById("Fruit").insertBefore(newlistitem,listitem[0])

// Remove Items

        // document.body.removeChild(newlistitem)
        // document.getElementById("Fruit").removeChild(newlistitem)


