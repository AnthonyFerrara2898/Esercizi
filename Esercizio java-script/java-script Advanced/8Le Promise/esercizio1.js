// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.


function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; 
            if (success) {
                resolve({ name: "John", age: 30 }); 
            } else {
                reject("Errore nel recupero dei dati dall'API");
            }
        }, 2000);
    });
}


fetchDataFromAPI()
    .then(data => console.log("Dati ricevuti:", data))
    .catch(error => console.error("Errore:", error));