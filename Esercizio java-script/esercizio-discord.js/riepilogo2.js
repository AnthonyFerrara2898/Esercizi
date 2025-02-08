// ESERCIZIO CONSEGNA:

/*
1. Crea un array chiamato "users" che contiene oggetti, dove ogni oggetto rappresenta un utente con proprietà come "name", "age" e "isActive".
2. Scrivi una funzione `filterAndSortUsers` che filtra gli utenti attivi (isActive: true) e ordina l'array in base all'età (dal più giovane al più anziano).
3. Scrivi una funzione `processUserData` che prende come argomento l'array "users" e due callback: una per filtrare e ordinare i dati e una per visualizzare l'array risultante.
4. Usa `setInterval` per eseguire `processUserData` ogni 5 secondi, passando come argomento l'array "users" e le due callback.
5. Aggiungi un timeout che ferma l'intervallo dopo 25 secondi.
6. Usa il **destructuring** per accedere alle proprietà dell'oggetto utente all'interno delle callback.
7. Utilizza lo **spread operator** per creare nuove versioni dell'array quando necessario.
8. Usa lo **spread parameter** per passare un numero arbitrario di utenti a una funzione che esegue un'operazione su tutti gli utenti.
*/

const user = [
    { name: "Mario", age: 27, isActive: true },
    { name: "Sofia", age: 30, isActive: false },
    { name: "Stefano", age: 15, isActive: false },
    { name: "Aldo", age: 45, isActive: true },
    { name: "Angelo", age: 55, isActive: false },
    { name: "Sara", age: 20, isActive: true },
  ];
  
  function filterAndSortUsers() {
    const attivi = user.filter((x) => x.isActive);
    return attivi.sort((a, b) => a.age - b.age);
  }
  console.log(filterAndSortUsers());
  
  function processUserData(user, callback, callbackDue) {
    const filtrato = callback(user);
    callbackDue(filtrato);
  }
  function visualizza(array) {
    array.forEach((x) => console.log(Nome: ${x.name}, età: ${x.age}));
  }
  processUserData(user, filterAndSortUsers, visualizza);
  
  const intervallo = setInterval(() => {
    processUserData(user, filterAndSortUsers, visualizza);
  }, 5000);
  
  setTimeout(() => {
    clearInterval(intervallo);
  }, 25000);