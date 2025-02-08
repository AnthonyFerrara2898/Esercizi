const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer' },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman' },
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer' },
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer' }
];

function getMotto(hobby) {
    const motto = {
        'gamer': 'Life Is a Game, Play to Win!',
        'sportsman': 'Never give up!',
        'photographer': 'A picture is worth a thousand words!'
    };
    return motto[hobby] || 'Live your passion!';
}

function findYoungestStudent(students) {
    return students.reduce((youngest, student) => student.age < youngest.age ? student : youngest);
}

function findLongestSurname(students) {
    return students.reduce((longest, student) => student.surname.length > longest.surname.length ? student : longest);
}

function printStudentsInfo(students) {
    students.forEach(student => {
        console.log(student.name);
        console.log(getMotto(student.hobby));
    });
    
    const youngest = findYoungestStudent(students);
    console.log('Il più giovane è', youngest.name);
    
    const longestSurname = findLongestSurname(students);
    console.log('Il cognome più lungo è', longestSurname.surname);
}

printStudentsInfo(students);

students.splice(2, 0, { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer' });

printStudentsInfo(students);
