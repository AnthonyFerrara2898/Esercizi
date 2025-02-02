// Partendo dall'esercizio precedente, tramite un ciclo for, dobbiamo stampare tutti gli elementi contenuti nel nostro array

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }