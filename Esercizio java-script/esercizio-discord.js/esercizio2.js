// Dati i seguenti array di esempio di prodotti e clienti...

const products = [
  {
    name: "Laptop",
    price: 1200,
    category: "electronics",
    discount: true,
    discountPercent: 10,
  },
  {
    name: "Smartphone",
    price: 800,
    category: "electronics",
    discount: false,
    discountPercent: 0,
  },
  {
    name: "Headphones",
    price: 150,
    category: "electronics",
    discount: true,
    discountPercent: 15,
  },
  {
    name: "T-shirt",
    price: 20,
    category: "clothing",
    discount: false,
    discountPercent: 0,
  },
  {
    name: "Jeans",
    price: 50,
    category: "clothing",
    discount: true,
    discountPercent: 20,
  },
  {
    name: "Coffee Maker",
    price: 100,
    category: "home",
    discount: true,
    discountPercent: 5,
  },
];

const customers = [
  {
    id: 1,
    name: "Alice",
    orders: [
      { product: "Laptop", quantity: 1 },
      { product: "Jeans", quantity: 2 },
    ],
  },
  { id: 2, name: "Bob", orders: [{ product: "Smartphone", quantity: 1 }] },
  {
    id: 3,
    name: "Charlie",
    orders: [
      { product: "Headphones", quantity: 1 },
      { product: "Coffee Maker", quantity: 1 },
    ],
  },
];

// 1️⃣ Funzione che applica un ulteriore sconto del 5% su una categoria con prodotti già scontati
// Implementa una funzione che riceve una categoria come parametro e applica uno sconto extra del 5% solo ai prodotti già scontati
function applyCategoryDiscount(category) {
   let scontati = products.map(prodotto => {
    if(prodotto.category === category && prodotto.discount ){
       return {name: prodotto.name, price: prodotto.price * 0.95, category: prodotto.category, discount: prodotto.discount, discountPercent: prodotto.discountPercent + 5}
    }
   }
  );
  return scontati
}
console.log(applyCategoryDiscount("home"))
// 2️⃣ Funzione che calcola il totale di un ordine considerando gli sconti
// Implementa una funzione che calcola il totale speso da un cliente dato il suo ID, applicando gli sconti se presenti
function calculateOrderTotal(customerId) {
  const customer = customers.find(x => x.id === customerId)
  let totaleOrdini = 0
  customer.orders.forEach(order => {
    const prodotto = products.find(x => x.name === order.product);
    let totale = prodotto.price * order.quantity
    totaleOrdini += totale

  })
  return totaleOrdini
}
console.log(calculateOrderTotal(3));

// 3️⃣ Funzione che trova i clienti che hanno acquistato prodotti di una certa categoria
// Implementa una funzione che restituisce un array di nomi dei clienti che hanno acquistato almeno un prodotto di una determinata categoria
function getCustomersByCategory(category) {
return customers.filter(customer =>
    customer.orders.some(order => products.some(product => product.name === order.product && product.category === category))
).map(x => x.name)
}
console.log(getCustomersByCategory("electronics"));

// 4️⃣ Funzione che trova il cliente che ha speso di più
// Implementa una funzione che restituisce il nome del cliente che ha speso di più in totale
function getTopSpender() {
    let max = 0
    let topCustomers = null
customers.forEach(customer => {
    let totale = calculateOrderTotal(customer.id)
    if (totale > max) {
        max = totale;
        topCustomers = customer.name
    }
})
return topCustomers
}
console.log(getTopSpender())

// 5️⃣ Funzione che aggiunge un nuovo ordine a un cliente
// Implementa una funzione che aggiunge un nuovo ordine per un cliente esistente dato il suo ID, il nome del prodotto e la quantità
function addOrder(customerId, productName, quantity) {
  // ...
}

// Testa di seguito le tue funzioni!
ma