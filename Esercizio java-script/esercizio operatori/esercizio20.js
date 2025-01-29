// Crea una variabile primitive e assegnale un valore che potrà essere di tipo numero, stringa o booleano.
// Crea un controllo per verificare il tipo della variabile e stamparlo in console.

const primitive = true
 
if (typeof primitive === "number") {
    console.log("La variabile è un Numero");
} else if (typeof primitive === "string") {
    console.log("La variabile è una Stringa");
} else if (typeof primitive === "boolean") {
    console.log("La variabile è un booleano");
} else {
    console.log("Non specificabile");
}

//in base alla nostra variabile verrà stampato il nostro risultato; in questo caso stamperà: "La variabile è un booleano"
