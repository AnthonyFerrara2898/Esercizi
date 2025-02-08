let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

let helloAsNumber = Number(hello); 
let ageAsBoolean = Boolean(age); 
let isGraduatedAsString = String(isGraduated); 

console.log("hello come numero:", helloAsNumber); // Dal momento che 'Ciao' non rappresenta un valore numerico valido, il risultato è NaN (Not-a-Number)
console.log("age come booleano:", ageAsBoolean); 
console.log("isGraduated come stringa:", isGraduatedAsString); 
