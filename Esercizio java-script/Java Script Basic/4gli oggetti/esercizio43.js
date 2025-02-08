//Il nostro oggetto student è incompleto. Abbiamo bisogno di aggiungere a questo oggetto, un ulteriore oggetto al suo interno di nome personalData. 
//L'oggetto nested personalData deve contenere le seguenti proprietà: name, surname, age. Sapresti inserirlo?

//Stampa a schermo l'oggetto nested personalData che dovrà trovarsi dentro student.

const student = {
    id: 1,
    school: "Liceo",
    year: 3,
    personalData: {
      name: "Mario",
      surname: "Rossi",
      age: 18
    }
  };
  
 
console.log(student.personalData);