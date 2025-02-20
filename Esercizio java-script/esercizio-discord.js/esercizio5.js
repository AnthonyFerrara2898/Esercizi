// ESERCIZIO 11:
// Simuliamo di un combattimento a turni tra due personaggi come un GDR!

// 1. Dato il seguente array di personaggi, dove ogni oggetto è personaggio con:
//    { id, nome, vita, attacco, difesa } (N.b. personalizza se vuoi come preferisci :) ).

const personaggi = [
  { id: 1, nome: "Guerriero", vita: 100, attacco: 25, difesa: 10 },
  { id: 2, nome: "Mago", vita: 80, attacco: 30, difesa: 5 },
  { id: 3, nome: "Ladro", vita: 90, attacco: 20, difesa: 15 },
  { id: 4, nome: "Orco", vita: 120, attacco: 15, difesa: 20 },
  { id: 5, nome: "Elfo", vita: 85, attacco: 22, difesa: 8 },
];

// 2. Creare una funzione `selezionaPersonaggi()` che restituisce una Promise:
//   Dopo 1 secondo, sceglie due personaggi casualmente dall'array.
// 3. Creare una funzione `calcolaDanno(attaccante, difensore)` che restituisce una Promise:
//   Dopo 1 secondo calcola il danno:
//     Il danno base è l'attacco dell'attaccante meno la difesa del difensore (minimo 1).
//     Se `Math.random() > 0.8`, il danno raddoppia (colpo critico).
// 4. Creare una funzione `combatti()` che esegue turni alternati finché un personaggio raggiunge 0 vita.
// 5. Stampare ogni turno e il vincitore finale.

function selezionaPersonaggi(personaggi){
  return new Promise((resolve,reject) => {
  setTimeout(() => {
   const personaggiSelezionati = personaggi.sort(() => 0.5 - Math.random()).slice(0, 2) 
   resolve(personaggiSelezionati) 
   console.log(`Gli sfidanti sono: ${personaggiSelezionati[0].nome} e ${personaggiSelezionati[1].nome}`)
  },1000)
}) 
}
function calcolaDanno(attaccante,difensore){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
     let danno = attaccante.attacco - difensore.difesa;
     if (danno <= 0){danno = 1}  
     if (Math.random() > 0.8){danno = danno * 2
      console.log(`il difensore ${difensore.nome} ha subito un Colpo Critico!`)
     }
        
     resolve(danno)
     console.log(`${attaccante.nome} infligge ${danno} danni a ${difensore.nome}`)
    },1000)
  })
}
function turno(attaccante,difensore){
  return calcolaDanno(attaccante,difensore).then((result) => {
  difensore.vita = difensore.vita - result
  console.log(`A ${difensore.nome} resta ${difensore.vita} vita`)
  if (difensore.vita <= 0){
    return `${attaccante.nome}, ha vinto! ${difensore.nome}, è stato eliminato!`
  }else {return turno(attaccante,difensore)}
  }) 
}


function combatti(){
  selezionaPersonaggi(personaggi).then(([personaggioA,personaggioB]) => turno(personaggioA,personaggioB)).then((result) => console.log(result)).catch((error) => console.log(error))
}

combatti()

//esercizio5: cambia i nome dei personaggi e aggiungi una chiave con due frasi (una quando subisce danno una quando infligge danno)
// implementa una casiatica quando il difensore attacca e decrementa la sua vita di conseguenza 
// implementare un console.log con le frasi di ciascun personaggio quando infligge o subisce danno 
// implementare una casistica che con bassa probabilità aumenta la vita del difensore 