//Scriviamo il nostro primo array. Scrivi un array di nome numbers dove avremo una collezione di numeri da 1 a 10. Di seguito dovremo:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Stampare in console il primo valore
// Stampare la lunghezza dell'array
// Stampare in console l'ultimo valore
// Spiegare il risultato se proviamo a stampare l'elemento dell'array con indice venti


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Primo valore:", numbers[0]); //Stamperà 1


console.log("Lunghezza dell'array:", numbers.length); //Stamperà 10


console.log("Ultimo valore:", numbers[numbers.length - 1]); //Stamperà 10


console.log("Valore all'indice 20:", numbers[20]);  //Stamperà undefined