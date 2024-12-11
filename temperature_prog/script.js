const textbox = document.getElementById("number");
const tofran = document.getElementById("Fran");
const tocelci = document.getElementById("celsius");
const result = document.getElementById("Result");
let temp;

function convert() {
    if (textbox.value === "") {
        result.textContent = "Please enter a number.";
        return;
    }

    if (tofran.checked) {
        
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + " °F";
    } 
    else if (tocelci.checked) {

        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(2) + " °C";
    } 
    else {
        result.textContent = "Please select a unit to convert.";
    }
}
