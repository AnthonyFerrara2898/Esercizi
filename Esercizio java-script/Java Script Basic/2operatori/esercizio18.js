//Trasforma il costrutto if-else in un operatore ternario
//Esercizio da trasformare in operatore ternario

let number = 7;

if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

//Soluzione

console.log(number > 0 ? "The number is positive" : "The number is negative");

//Se il numero della nostra variabile è maggiore di 0 stamperà "The number is positive"
//Se sarà minore o uguale a 0 stamperà "The number is negative"