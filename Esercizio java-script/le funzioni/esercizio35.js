// Sistemare la funzione in modo tale che non prendiamo errori in console.
// Inoltre, spiegare brevemente come mai al momento la funzione è sbagliata.
function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
  }

  console.log(personName + sport);
}

//La funzione contiene un errore perchè la variabile "personName" è dichiarata all'interno di un blocco if utilizzando let

//Soluzione dell'esercizio
function canPlay() {
    let sport = "Football";
    let personName = "Cosimo"; //inseriamo la variabile fuori da "if"
  
    if (personName === "Cosimo" && sport === "Football") {
      console.log(personName + " può giocare a " + sport);
    } else {
      console.log(personName + " non può giocare a " + sport);
    }
  }
  canPlay(); //Chiamiamo la nostra function
  //adesso in console troveremo "Cosimo può giocare a Football" :)