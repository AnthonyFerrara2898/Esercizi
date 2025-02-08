//Usa un ciclo for per stampare in console tutti i numeri da 0 a 10 e poi la loro somma.
let somma = 0

for (let i = 0; i <= 10; i++) {
    console.log(i);
    somma += i  
    //la variabile "somma" parte dal valore che gli abbiamo dato all'inizio e si sommerà ad ogni numero che verrà stampato
}
console.log("Totale:" + " " + somma)
//una volta lanciato il comando nella console stamperà i numeri da 0 a 10 e alla fine stamperà "Totale: 55"