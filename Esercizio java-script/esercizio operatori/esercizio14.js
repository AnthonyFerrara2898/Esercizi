// A partire dalle variabili definite sotto, stampa a schermo il risultato di 6 operazioni logiche.

// Fai in modo che le prime tre operazioni restituiscano come risultato true e le rimanenti false
// Per ogni operazione, utilizza due operandi diversi tra loro
// Ricorda che gli operatori logici da usare sono soltanto AND (&&), OR (||) e NOT (!)
// Non confondere gli operatori logici con quelli di comparazione
const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;
//true
console.log(isSunnyDay || isAutumn)
console.log(isSummer && isSunnyDay)
console.log(!isAutumn)
//false
console.log(isAutumn && itIsRaining)
console.log(itIsRaining || isAutumn)
console.log(!isSunnyDay)