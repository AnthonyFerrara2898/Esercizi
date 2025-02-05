// Dati due array...
const menu = [
  { nome: "Margherita", prezzo: 8, categoria: "pizza", disponibile: true },
  { nome: "Pepperoni", prezzo: 10, categoria: "pizza", disponibile: true },
  { nome: "Carbonara", prezzo: 12, categoria: "pasta", disponibile: true },
  { nome: "Lasagna", prezzo: 14, categoria: "pasta", disponibile: false },
  {
    nome: "Insalata Caesar",
    prezzo: 9,
    categoria: "insalata",
    disponibile: true,
  },
];

const clienti = [
  {
    id: 1,
    nome: "Alice",
    ordini: [
      { piatto: "Margherita", quantita: 2 },
      { piatto: "Insalata Caesar", quantita: 1 },
    ],
  },
  {
    id: 2,
    nome: "Bob",
    ordini: [
      { piatto: "Pepperoni", quantita: 1 },
      { piatto: "Carbonara", quantita: 1 },
    ],
  },
  { id: 3, nome: "Carlo", ordini: [{ piatto: "Lasagna", quantita: 1 }] },
];

// Implementa la funzione `piattiDisponibiliPerCategoria` che riceve una categoria (es. "pizza")
// e restituisce i piatti disponibili di quella categoria, utilizzando il destructuring degli oggetti.

function piattiDisponibiliPerCategoria(categoria) {
  let menuFiltrato = menu.filter((x) => 
    x.categoria === categoria && x.disponibile)
  return menuFiltrato
}
console.log(piattiDisponibiliPerCategoria("pizza"))
// Implementa la funzione `calcolaTotaleOrdine` che accetta un numero variabile di ordini
// e restituisce il totale considerando il prezzo di ogni piatto e la quantità ordinata.
// Utilizza i Rest Parameters per gestire più ordini contemporaneamente.

function calcolaTotaleOrdine(...ordini) {
  let cliente = clienti.find(x => x.id === ordini)
  let spesa = 0
  clienti.ordini.forEach(x => {
    const piattoOrdinato = menu.find(y => y.nome === x.nome)
    let totale = piattoOrdinato.prezzo * x.quantita
    spesa += totale
  })
return spesa
}
console.log(calcolaTotaleOrdine(2))
// Implementa la funzione `aggiungiNuovoOrdine` che aggiunge un nuovo ordine a un cliente esistente.
// Deve utilizzare lo spread operator per non modificare direttamente l'array originale dei clienti.

function aggiungiNuovoOrdine(idCliente, nuovoOrdine) {
  // ...
}

// Implementa la funzione `preparaOrdine` che simula la preparazione di un ordine.
// Dopo 3 secondi, deve stampare "Ordine pronto per [nome cliente]!" utilizzando setTimeout.

function preparaOrdine(nomeCliente, ordine) {
  // ...
}

// Implementa la funzione `controllaOrdini` che ogni 5 secondi stampa "Controllo nuovi ordini..."
// per simulare il monitoraggio continuo degli ordini utilizzando setInterval.
// Deve fermarsi automaticamente dopo 20 secondi utilizzando clearInterval.

function controllaOrdini() {
  // ...
}
