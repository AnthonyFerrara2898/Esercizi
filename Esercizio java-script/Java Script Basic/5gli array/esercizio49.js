// Partendo dal seguente oggetto students:
// const students = [
//   { id: 1, name: "Luca", surname: "Rossi", age: 20 },
//   { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
//   { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
// ];
// Come possiamo rimuovere Giovanni e aggiungere lo studente Francesco?

// { id: 3, name: "Francesco", surname: "Verdi", age: 41 }

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
  ];
  
  const updatedStudents = students.map(student =>
    student.id === 3 ? { id: 3, name: "Francesco", surname: "Verdi", age: 41 } : student
  );
  
  console.log(updatedStudents);
  
