// In questo esercizio dato un array di studenti:
// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

//metodo forEach 
console.log("I nomi degli studenti sono:")
studenti.forEach(studente => console.log(studente.nome));

//metodo find
const studenteAlto = studenti.find(studente => studente.voto > 90) 
console.log("lo studente con il voto più alto è:",studenteAlto)

//metodo reduce 
const mediaVoti = studenti.reduce((acc, curr) => acc + curr.voto, 0) / studenti.length;
console.log("La media dei voti degli studenti è:",mediaVoti)

//metodo map
const nomiMaiuscolo = studenti.map(studente => studente.nome.toUpperCase())
console.log("I nome degli studenti in Maiuscolo sono:",nomiMaiuscolo)

//metodo filter
const sufficienze = studenti.filter(studente => studente.voto > 85)
console.log("Gli studenti con la sufficienza sono:",sufficienze)