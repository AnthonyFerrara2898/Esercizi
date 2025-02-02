//Abbiamo l'oggetto smartphone. Utilizzando uno specifico metodo degli oggetti, possiamo rendere questo oggetto 'freezato', e quindi non modificare il prezzo così facilmente. 
// Sapresti scrivere il metodo che ci serve?

const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

Object.freeze(smartphone);

smartphone.price = 100;

console.log(smartphone);