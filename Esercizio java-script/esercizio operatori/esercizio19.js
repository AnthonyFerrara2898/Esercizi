//Date le variabili name e surname, crea un costrutto if else per stampare in console la variabile fullname, che conterrà le due variabili precedenti.
//La variabile fullname dovrà essere stampata solo se name e surname sono truthy, in caso contrario stampa il messaggio Fullname is invalid

let name ;  
let surname = 'Rossi';  

if (name && surname) {
    let fullname = name + " " + surname;
    console.log(fullname);
} else {
    console.log("Fullname is invalid");
}
// 
// Finchè name sarà undefined il risultato stampato sarà "Fullname is invalid"; quando name sarà defined stamperà il fullname (esempio: Mario Rossi)
