//esercizio5: cambia i nome dei personaggi e aggiungi una chiave con due frasi (una quando subisce danno una quando infligge danno)
// implementa una casiatica quando il difensore attacca e decrementa la sua vita di conseguenza 
// implementare un console.log con le frasi di ciascun personaggio quando infligge o subisce danno 
// implementare una casistica che con bassa probabilità aumenta la vita del difensore 

const personaggi = [
    { id: 1, nome: "Paladino", vita: 100, attacco: 25, difesa: 10, frase1:"La mia spada è al servizio del regno!", frase2:"Non mi arrenderò mai!"},
    { id: 2, nome: "Stregone", vita: 80, attacco: 30, difesa: 5, frase1:"Sto accrescendo il mio potere!", frase2:"argh... la mia magia non sta funzionando!!!"},
    { id: 3, nome: "Ninja", vita: 90, attacco: 20, difesa: 15, frase1:"Non sei alla mia altezza!", frase2:"Sei il primo essere vivente che riesce a vedermi!"},
    { id: 4, nome: "Berserker", vita: 120, attacco: 15, difesa: 20, frase1:"Sei soltanto un moscerino!", frase2:"Come osi toccarmi moscerino?"},
    { id: 5, nome: "Ranger", vita: 85, attacco: 22, difesa: 8, frase1:"Questa freccia porta il tuo nome!", frase2:"Maledizione! devo prendere le distanze!"},
  ];
  
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
       
       console.log(`${attaccante.frase1}`) 
       console.log(`${attaccante.nome} infligge ${danno} danni a ${difensore.nome}`)
       console.log(`${difensore.frase2}`)
       

       // Possibilità di recuperare vita (10% di probabilità)
       if (Math.random() < 0.1) {
        let cura = Math.floor(Math.random() * 10) + 5; //rigenerà minimo 6 punti massimo 15 punti
        difensore.vita = difensore.vita + cura;
        console.log(`${difensore.nome} si rigenera di ${cura} punti vita! Ora ha ${difensore.vita} vita.`);
      }
    },1000)
    })
  }
  function turno(attaccante,difensore){
    //turno attaccante
    return calcolaDanno(attaccante,difensore).then((result) => {
    difensore.vita = difensore.vita - result
    console.log(`${difensore.nome} viene colpito! restano ${difensore.vita} punti vita.`)
    console.log("\n") //lascia uno spazio vuoto
    if (difensore.vita <= 0){
      return `${attaccante.nome}, ha vinto! ${difensore.nome}, è stato eliminato!`
    }else {
      //turno del difensore
      return calcolaDanno(difensore, attaccante).then((turnoDifensore) =>{
        attaccante.vita = attaccante.vita = turnoDifensore
        console.log(`${attaccante.nome} viene colpito! restano ${attaccante.vita} punti vita.`)
        console.log("\n") //lascia uno spazio vuoto
        if(attaccante.vita <= 0){
          return `${difensore.nome} ha vinto! ${attaccante.nome} è stato eliminato!`
        }else{
          return turno(attaccante,difensore);
        }
      })
      }
    }) 
  }
  
  
  function combatti(){
    selezionaPersonaggi(personaggi).then(([personaggioA,personaggioB]) => turno(personaggioA,personaggioB)).then((result) => console.log(result)).catch((error) => console.log(error))
   }
  
  combatti()
  
  // async function combatti(){
  //   try {
  //    let [personaggioA, personaggioB] = await selezionaPersonaggi(personaggi)
  //    while(personaggioA.vita > 0 && personaggioB.vita > 0) {
  //     const danno = await calcolaDanno(personaggioA, personaggioB)
  //     personaggioB.vita -= danno
  //     if(personaggioB.vita <= 0){console.log(`${personaggioA.nome} è il vincitore!`)
  //       return}  
  //     [personaggioA, personaggioB] = [personaggioB, personaggioA]
  //    }
  //   }
  //   catch(error){console.error(error)}
  // }

  // combatti()