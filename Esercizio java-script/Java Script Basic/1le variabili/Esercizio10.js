//Spiega la differenza tra:
const firstYearCompleted = true; // è una variabile booleana con valore true
const yearsCompleted = 1; // è una variabile numerica con valore 1

yearsCompleted == firstYearCompleted // uguaglianza non stretta confronta solo i valori dei due operandi, ma con coerzione di tipo(Se i valori sono di tipi diversi, JavaScript cerca di convertirli automaticamente per renderli compatibili prima di fare il confronto)
yearsCompleted === firstYearCompleted // uguaglianza stretta confronta sia i valori che i tipi degli operandi senza coercizione di tipo(I valori devono essere esattamente uguali e devono avere lo stesso tipo per essere considerati uguali)

