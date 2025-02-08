//Partendo dall'oggetto creato nell'esercizio precedente, scrivi un ciclo for in dove stampiamo le chiavi dell'oggetto car

let car = {
    name: "Camaro ZL1",
    color: "Black"
  };
  
  for (let key in car) {
    console.log(key);
  }