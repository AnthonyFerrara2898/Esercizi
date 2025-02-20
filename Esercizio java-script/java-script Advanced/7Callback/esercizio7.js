// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
    try {
      const result = a + b;
      callback(result);
    } catch (error) {
      console.error("Si è verificato un errore nella callback:", error.message);
    }
  }
  
  function displayResult(result) {
    if (typeof result !== 'number') {
      throw new Error("Il risultato non è un numero valido");
    }
    console.log("Il risultato è:", result);
  }
  
  performOperation(5, 3, displayResult);
  
  function faultyCallback(result) {
    throw new Error("Errore intenzionale nella callback");
  }
  
  performOperation(5, 3, faultyCallback);