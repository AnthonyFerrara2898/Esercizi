// Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:

// const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Rimuovere il nome "Giovanni" dal nostro array
// Aggiungere il nome "Pippo" alla coda del nostro array
// Aggiungere il nome "Giovanni" come primo elemento del nostro array
// Dopo ogni operazione inserire il console.log() del nostro array names

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// Rimuovere "Giovanni"
const index = names.indexOf("Giovanni");
if (index !== -1) {
    names.splice(index, 1);
}
console.log(names); // ["Luca", "Marco", "Vittorio"]

// Aggiungere "Pippo" alla coda
names.push("Pippo");
console.log(names); // ["Luca", "Marco", "Vittorio", "Pippo"]

// Aggiungere "Giovanni" come primo elemento
names.unshift("Giovanni");
console.log(names); // ["Giovanni", "Luca", "Marco", "Vittorio", "Pippo"]
