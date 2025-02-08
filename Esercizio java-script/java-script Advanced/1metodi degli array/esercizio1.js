// Implementare la funzione adultFilter che, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni.
const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
 function adultFilter(persons) {
  return persons.filter(person => person.age >= 18);
}
  const adults = adultFilter(persons); //la variabile che richiama la nostra funzione 
  console.log(persons); //stamperà l'intero arrey di persons
  console.log(adults); //stamperà solo i nomi con età maggiore o uguale a 18