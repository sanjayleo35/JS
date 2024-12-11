/*    //Area of circle
const PI = 3.14159 //using this can get constant value that can't be change further
let r=window.prompt("Enter the value of r: ")
r=Number(r)
console.log(`The area of circle is: ${PI * (r**2)}`)
*/

/* Acept from HTML
HTML:
    <h1>Area of circle :</h1>
    <label>Enter the Radius:</label>
    <input type="text" id="radius"><br><hr>
    <button id="sub">Submit</button>
    <p id="myp"></p>
JS:
const PI = 3.14159
let radius
document.getElementById("sub").onclick = function(){
    radius=document.getElementById("radius").value
    radius=Number(radius)
    document.getElementById("myp").textContent=(`The area of circle is: ${PI * (radius**2)}`)
}
*/




/*   If else statement with checkbox & Radio btn
HTML:
     <input type="checkbox" id="mycheckbox">
    <label for="mycheckbox">Leo</label><br><br>
    <h1>Role:</h1>
    <input type="Radio" id="student" name="Role">
    <label for="student">student</label>
    <input type="Radio" id="teacher" name="Role">
    <label for="s=teacher">Teacher</label>
    <input type="Radio" id="principal" name="Role">
    <label for="principal">principal</label><br><br>
    <button id="mybtn">Sumbmit</button><br><br>

    <p id="p1"></p>
    <p id="p2"></p>
Js:
const mycheckbox =document.getElementById("mycheckbox")
const student = document.getElementById("student")
const teacher = document.getElementById("teacher")
const principal = document.getElementById("principal")
const mybtn = document.getElementById("mybtn")
const p1 =document.getElementById("p1")
const p2 =document.getElementById("p2")

mybtn.onclick = function(){
    if(mycheckbox.checked){
        p1.textContent = "I am Leo"
    }
    else{
        p1.textContent = "Check box ah Tick pannuda"
    }
    if (student.checked){
        p2.textContent = "i am a Student"
    }
    else if(teacher.checked){
        p2.textContent = "I am a Teacher"
    }
    else if (principal.checked){
        p2.textContent = "I am a principal"
    }
    else{
        p2.textContent ="Select any one of the Role"
    }

}
*/