//Nel nostro codice troviamo un oggetto user che presenta le proprietà name e age. 
// Adesso, se vogliamo creare un nuovo utente partendo da user, e dopo proviamo a modificarne il nome, come vedrete dai console.log(), 
// andremo a modificare anche l'oggetto di partenza. 
// Sapresti creare una copia dell'oggetto user per poterne modificare il nome senza modificare quello di user?

// let user = {
//     name: "Cosimo",
//     age: 30,
//   };
  
//   let newUser = user;
  
//   newUser.name = "Paolo";
  
//   console.log(newUser);
//   console.log(user);

let user = {
    name: "Cosimo",
    age: 30,
  };
  
  let newUser = { ...user };
  
  newUser.name = "Paolo";
  newUser.age = 32; 

  console.log(newUser); 
  console.log(user);    