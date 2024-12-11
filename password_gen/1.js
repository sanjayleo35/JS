function generatePass(length, includeLowercase,includeUppercase,includeNumbers,includeSymbols)
{
    const lowercaseChar="abcdefghijklmnopqrstuvwxyz"
    const uppercaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChar = "0123456789"
    const SymbolsChar = "!@#$%^&*()_+~?><{},."

let allowedChar = ""
let password = ""
 allowedChar += includeLowercase ? lowercaseChar: "";
 allowedChar += includeUppercase ? uppercaseChar: "";
 allowedChar += includeNumbers ? numberChar: "";
 allowedChar += includeSymbols ? SymbolsChar: "";

 if(length <=0){
    return `(password length is must be 1)`
 }
 if(allowedChar.length ===0){
    return `(At least one set of character need to allowed)`
 }
 for (let i=0; i<length;i++){
    const randomIndex = Math.floor(Math.random() * allowedChar.length)
    password += allowedChar[randomIndex]
 }

    return password
}
const passwordLength = 12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;

const password = generatePass(passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
);
 console.log(`password is ${password}`)