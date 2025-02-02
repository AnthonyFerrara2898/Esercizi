// Abbiamo bisogno di scrivere un array che chiameremo students. Questo array conterrà tre oggetti con le seguenti informazioni:

// id
// name
// surname
// age
// Dobbiamo scrivere queste informazioni per tre studenti diversi. Dopo averlo fatto, vogliamo stampare le info solamente del primo studente.

// Indicazioni utili:

// Dentro il nostro array, avremo tre oggetti, ogni oggetto conterrà le info di uno studente
// Dobbiamo stampare solamente il primo elemento dell'array

const students = [
    {
      id: 1,
      name: "Mario",
      surname: "Rossi",
      age: 20
    },
    {
      id: 2,
      name: "Luca",
      surname: "Bianchi",
      age: 22
    },
    {
      id: 3,
      name: "Giulia",
      surname: "Verdi",
      age: 21
    }
  ];
  
  console.log(students[0]);
  