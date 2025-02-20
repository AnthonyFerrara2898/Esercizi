// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. 
// -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.

function fetchDataFromAPI(callback) {
    setTimeout(() => {
      const data = { name: "John", age: 30 }; // Simulazione di dati recuperati da un'API
      callback(data);
    }, 2000); // Simula un ritardo di 2 secondi
  }
  
  function handleData(data) {
    console.log("Dati ricevuti:", data);
  }
  
  fetchDataFromAPI(handleData);
  