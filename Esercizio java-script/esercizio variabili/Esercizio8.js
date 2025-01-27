let variable = true;

console.log("Valore iniziale:", variable);
console.log("Tipo iniziale:", typeof variable);

let asNumber = Number(variable);
console.log("Valore come numero:", asNumber);
console.log("Tipo come numero:", typeof asNumber);

let asString = String(variable);
console.log("Valore come stringa:", asString);
console.log("Tipo come stringa:", typeof asString);

let asBoolean = Boolean(asString); 
console.log("Valore come booleano:", asBoolean);
console.log("Tipo come booleano:", typeof asBoolean);
