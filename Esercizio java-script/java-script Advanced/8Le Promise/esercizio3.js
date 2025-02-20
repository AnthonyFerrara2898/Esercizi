//-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operazione completata!");
        }, ms);
    });
}

delay(2000).then((message) => {
    console.log(message); 
});