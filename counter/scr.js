const Increase = document.getElementById("Increase")
const Decrease = document.getElementById("Decrease")
const Reset = document.getElementById("Reset")
const counting = document.getElementById("countLabel")

let count=0
Increase.onclick = function(){
    count ++;
    counting.textContent = count
}
Decrease.onclick = function(){
    count--;
    counting.textContent = count
}
Reset.onclick = function(){
    count = 0
    counting.textContent = count
}
