// Partendo dal codice, vogliamo che la variabile sport sia una variabile 'globale'. Quale definizione possiamo adottare?
//  function canPlay() {
// let sport = " Football";

// if (true) {
//  let personName = "Cosimo";
// }
//  console.log(personName + sport);
// }

// canPlay();
// Indicazioni utili:

// La funzione deve compilare correttamente

let sport = "Football"; //per essere una variabile globale deve stare all'esterno della function 

function canPlay() {
  let personName = "Cosimo"; 
  
  console.log(personName + sport);
}

canPlay();