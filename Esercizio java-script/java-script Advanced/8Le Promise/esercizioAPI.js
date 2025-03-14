// Implementare le funzioni fetchPersonById e fetchJobById, le quali dato un id devono restituire rispettivamente:
// La persona che ha come identificativo l'id passato come parametro
// Il tipo di lavoro che ha come identificativo l'id passato come parametro
// Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato. 
// N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le Promise sono state risolte.

const persons = [
    { id: 1, firstName: 'Mario', lastName: 'Rossi', age: 25 },
    { id: 2, firstName: 'Maria', lastName: 'Verdi', age: 32 },
    { id: 3, firstName: 'Giovanni', lastName: 'Rossi', age: 35 }
];

const jobs = [
    { id: 1, jobTitle: 'CEO' },
    { id: 2, jobTitle: 'Project Manager' },
    { id: 3, jobTitle: 'Developer' }
];

function fetchPersonById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const person = persons.find(person => person.id === id);
            if (person) {
                resolve(person);
            } else {
                reject(`No person with id ${id}`);
            }
        }, 3000);
    });
}

function fetchJobById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const job = jobs.find(job => job.id === id);
            if (job) {
                resolve(job);
            } else {
                reject(`No job with id ${id}`);
            }
        }, 2000);
    });
}

const personId = 1;
const jobId = 1;

Promise.all([fetchPersonById(personId), fetchJobById(jobId)])
    .then(([person, job]) => {
        console.log(`Person: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
        console.log(`Job: ${job.jobTitle}`);
    })
    .catch(error => console.error(error));