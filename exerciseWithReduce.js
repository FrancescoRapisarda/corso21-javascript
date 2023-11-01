/*
Creare un array di oggetti.
Ogni oggetto è formato da nome , cognome e anno di nascita;
Risultato? 
Somma tutte le età delle persone con la funzione reduce().

*/


const persons = [
    { name: "Francesco", surname: "Rapisarda", birthDay: 1989 },
    { name: "Riccardo", surname: "Bondisi", birthDay: 1995},
    { name: "Davide", surname: "Rapisarda", birthDay: 1989 }
  ];

  
  const sumAge = persons.reduce((accumulator, persons) => {                     //valore di default dell'accumulatore, funzione di callback
    const age = 2023 - persons.birthDay;            
    return accumulator + age;
  }, 0);
  
  console.log("La somma di tutte le età è:", sumAge);







//esercizio di prova

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);



console.log(sumWithInitial);    //Out: 10
