// Crea, tramite costrutto switch, un controllo che stampi in console il prezzo di una camera d'albergo in base alle seguenti tariffe:
// Tariffa BB --> 50€
// Tariffa HB --> 80€
// Tariffa FB --> 100€

let tariffa = ""
switch (tariffa) {
    case "Tariffa BB":
     console.log("La tariffa BB costa 50€")
     break 

    case "Tariffa HB":
     console.log("La tariffa HB costa 80€")
     break  

    case "Tariffa FB":
     console.log("La tariffa HB costa 100€")
     break  

    default:
     console.log("Selezionare una tariffa validà")
     break
}

//Inserendo uno dei nostri valori nella nostra variabile "tariffa", ad esempio, Tariffa BB, stamperà "La tariffa BB costa 50€"
//Nel momento in cui lasciamo la nostra variabile vuota o inseriamo un valore non riconosciutò, stamperà "Selezionare una tariffa validà" 