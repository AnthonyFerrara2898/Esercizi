// Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
// Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
// Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
// Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."

function lanciaDadi() {
    // Genera due numeri casuali tra 1 e 6
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
  
    // Stampa il risultato del lancio
    console.log(`Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}`);
  }
  
  console.log("Lancio dei dadi in corso...");
  
  // Imposta un timeout di 2 secondi (2000 millisecondi) prima di eseguire la funzione
  setTimeout(lanciaDadi, 2000);