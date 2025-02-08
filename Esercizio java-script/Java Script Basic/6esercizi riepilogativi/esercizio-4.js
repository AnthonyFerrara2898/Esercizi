function filtraProprietaStringa(obj) {
    return Object.keys(obj).filter(key => 
        typeof obj[key] === 'string' && obj[key].length > 5
    );
}

const esempio = {
    nome: "Giovanni", //+ di 5
    eta: 30,
    citta: "Roma",
    professione: "Sviluppatore", //+ di 5
    hobby: "calcio" //+ di 5  
};

const risultato = filtraProprietaStringa(esempio);
console.log(risultato); 

