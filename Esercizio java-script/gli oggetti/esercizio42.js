//Scrivere un funzione di nome Smartphone che prenda come parametro i seguenti elementi: brand, name, price.
//Questa funzione, ogni volta che viene chiamata con new, deve restituire un nuovo oggetto smartphone, con le informazioni (parametri) che passiamo.

function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
  }

  const smartphone1 = new Smartphone('Apple', 'iPhone 16 pro', 1600);
  console.log(smartphone1);
  
  const smartphone2 = new Smartphone('Samsung', 'Galaxy S24', 1400);
  console.log(smartphone2);