// Partendo dall'esercizio precedente, vogliamo aggiungere un delay quando andiamo a stampare il nostro "Hello" "Nome". 
// Per fare questo, andremo ad utilizzare la funzione di JavaScript setTimeout(), questa come avete visto nel video, prende due parametri: 
// il primo parametro è una funzione, 
// il secondo sono i millesimi di secondo di delay. 
// Nel nostro esercizio, vogliamo che la funzione sayHelloName abbia al suo interno un setTimeout(), che stampi dopo 1 secondo il nostro "Hello" "Name".

function sayHelloName(callback) {
    setTimeout(() => {
        console.log("Hello"); 
        callback(); 
    }, 1000); 
}

function printName() {
    console.log("Anthony"); 
}

sayHelloName(printName);