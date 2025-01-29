//Crea un controllo, tramite un costrutto if else, che permetta di verificare il valore di una variabile pin di tipo number:
//Se il valore del pin è maggiore di 999 e minore o uguale a 10000, stampa il messaggio "Pin is valid". Altrimenti stampa il messaggio: "Pin is not valid".
const pin = 9988; 

if (pin > 999 && pin <= 10000) {
    console.log("Pin is valid");
} else {
    console.log("Pin is not valid");
}
