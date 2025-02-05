const books = [
  {
    title: "1984",
    author: "George Orwell",
    price: 15,
    genre: "dystopian",
    available: true,
    rating: 4.8,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 12,
    genre: "dystopian",
    available: false,
    rating: 4.6,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 18,
    genre: "classic",
    available: true,
    rating: 4.9,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10,
    genre: "classic",
    available: true,
    rating: 4.5,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    price: 22,
    genre: "adventure",
    available: true,
    rating: 4.2,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 25,
    genre: "fantasy",
    available: true,
    rating: 4.8,
  },
];

const customers = [
  {
    id: 1,
    name: "Alice",
    orders: [
      { title: "1984", quantity: 1 },
      { title: "The Hobbit", quantity: 2 },
    ],
  },
  { id: 2, name: "Bob", orders: [{ title: "Brave New World", quantity: 1 }] },
  {
    id: 3,
    name: "Charlie",
    orders: [
      { title: "The Great Gatsby", quantity: 1 },
      { title: "Moby Dick", quantity: 1 },
    ],
  },
];

// Implementa una funzione `getAvailableBooksByGenre` che riceve un genere (es. "dystopian")
// e restituisce un array con tutti i libri disponibili di quel genere.

function getAvailableBooksByGenre(genre) {
 let genere = books.filter(x => x.genre === genre)
 return genere 
}
console.log(getAvailableBooksByGenre("dystopian"))

// Implementa una funzione `calculateCustomerTotal` che riceve un customerId
// e restituisce il totale speso da quel cliente, moltiplicando il prezzo dei libri acquistati per la quantità.

function calculateCustomerTotal(customerId) {
  let customer = customers.find(x => x.id === customerId)
  let spesa = 0 
  customer.orders.forEach(x =>{
    const book = books.find(y => y.title === x.title)
    let totale = book.price * x.quantity 
    spesa += totale
  }) 
  return spesa
}
console.log(calculateCustomerTotal(3))
// Implementa una funzione `getCustomersByGenre` che riceve un genere (es. "fantasy")
// e restituisce un array con i nomi dei clienti che hanno acquistato almeno un libro di quel genere.

function getCustomersByGenre(genre) {
  return customers.filter(i => i.orders.some( y =>
    books.some(b => b.title === y.title && b.genre === genre)
  )).map(x => x.name)
}
console.log(getCustomersByGenre("fantasy"))
// Implementa una funzione `getTopCustomer` che trovi il cliente con la spesa più alta.
// Suggerimento: Puoi riutilizzare la funzione `calculateCustomerTotal`.

function getTopCustomer() {
 let massimoSpeso = 0
 let nome = " "
  customers.forEach(x => {
  let totale = calculateCustomerTotal(x.id)
  if (totale > massimoSpeso){
    massimoSpeso = totale 
    nome = x.name
  }
  });
  return nome
}
console.log(getTopCustomer())

// Implementa una funzione `addBookOrder` che permette di aggiungere un nuovo ordine a un cliente esistente.
// Deve verificare se il cliente esiste e se il libro è disponibile prima di aggiungere l'ordine.

function addBookOrder(customerId, bookTitle, quantity) {
  //...
}

// Implementa una funzione `getBestSellingBooks` che restituisce un array con i libri più venduti,
// ordinati per quantità decrescente. Deve calcolare il numero totale di copie vendute per ogni libro.

function getBestSellingBooks() {
  //...
}
