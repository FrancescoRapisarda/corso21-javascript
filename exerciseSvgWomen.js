/*
Ho un array di persone nome, cognome, anno di nascita, sesso.
Qual'e la media dell'eta delle donne tra 18 e 50 anni (compreso)
*/


const people = [
    {
        name: "John",
        surname: "Doe",
        yearsBirth: 1985,
        gender: "Male"
    },
    {
        name: "Jane",
        surname: "Smith",
        yearsBirth: 1990,
        gender: "Female"
    },
    {
        name: "Bob",
        surname: "Johnson",
        yearsBirth: 2000,
        gender: "Male"
    },
    {
        name: "Giulia",
        surname: "Leonardi",
        yearsBirth: 2005,
        gender: "Female"
    }
];


//Vecchio modo con variabili d'appoggio

//const filterWomen = people.filter(people => people.gender === "Female" && people.yearsBirth >= 1973 && people.yearsBirth <= 2005)
//console.log(filterWomen);

//const sumWomenAge = filterWomen.reduce((acc, people) => acc + (2023 - people.yearsBirth), 0);

//const svgWomenAge = sumWomenAge / filterWomen.length;



//modo super elegante!

//const svgWomenAge = people.reduce((acc, people) => (people.gender === "Female" && people.yearsBirth >= 1973 && people.yearsBirth <= 2005) ? acc + (2023 - people.yearsBirth) : acc, 0) / people.filter(people => people.gender === "Female" && people.yearsBirth >= 1973 && people.yearsBirth <= 2005).length;

const svgWomenAge = people.filter(people => people.gender === "Female" && people.yearsBirth >= 1973 && people.yearsBirth <= 2005)
                    .reduce((acc, people, i, arr) => acc + ((2023 - people.yearsBirth)/arr.length),0);

console.log("La media dell'età delle donne tra 18 e 50 anni è: " + svgWomenAge);


