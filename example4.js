
/* 

prendere 34 e 18

const getOnlyNumber = (array) => {
    const newArray = [];
    for(let i of arr) {
        if (typeof i === 'number') {
            newArray.push(i);
        }
    }
    return newArray;
} 


const arr = [24, "pippo", true, {name:"Francesco"}, undefined, 18];
console.log(getOnlyNumber(arr));

arr.filter();

*/



/*
//prendere i numeri 34 e 18

const arr = [34, "pippo", true, {name:"Francesco"}, undefined, 18];
const f = (item, i, arr) => {
    if (typeof item === 'number') {
        return true;
    }
    return false;
};

const newArray = arr.filter(f);
console.log(newArray);
*/



//dammi solo i pari

//prendere i numeri 34 e 18

const arr = [32, 13, 11, 22, 34, 89];

const newArray = arr.filter(item => item % 2 === 0);  //filter cambia la dimensione dell'array ma non il contenuto
console.log(newArray);


//rimappare un array trasforma il suo valore iesimo, sommando 1 a l'elemento iesimo.
//map è una funzione di callback
//il return finale avra il nuovo valore che dovra essere creato a partire da quello di partenza dell'array e verra posizionto nello stesso indice.


/*
//const arrTwo = [33, 14, 12, 23, 35, 90];

const f =(item, i, arr) => item + 1;

const newArrayTwo = arr.map(f);
console.log(newArrayTwo);

*/


//true se pari false se è dispari

const arrOfNumbers = [32, 13, 11, 22, 34, 89];

const mapArray = arrOfNumbers.map(item => item % 2 === 0 ? true : false);   //map fa una trasformazione sia di tipo che di valore ma non cambia la dimensione dell'array iniziale

console.log(mapArray);



//some
//every     
//entrambi ricevono una funzione di callback, ritornano true o false (booleani!)


//sono tutti pari? (every) rivolto alla funzione di callback
//ce ne almeno uno pari? (some) rivolto alla funzione di callback, al primo truty eseguirà la callback  




//array di stringhe verificare se sono tutti sotto i 10 caratteri

const arrayString = ["Francesco", "Riccardo", "GianDomenicoFracchia", "Ferdinando", "Febe", "Leo"];

const arrayString2 = ["Francesco", "Riccardo", "Febe", "Leo"];

const allEven = arrayString2.every(item => item.length < 10);

console.log(allEven);




//Array di Oggetti (esercizio)

const peoples = [
    {
      "name": "John",
      "sex": "Male",
      "age": 30
    },
    {
      "name": "Alice",
      "sex": "Female",
      "age": 25
    },
    {
      "name": "Bob",
      "sex": "Male",
      "age": 35
    },
    {
      "name": "Emily",
      "sex": "Female",
      "age": 28
    },
    {
      "name": "Michael",
      "sex": "Male",
      "age": 40
    },
    {
      "name": "Sophia",
      "sex": "Female",
      "age": 22
    },
    {
      "name": "David",
      "sex": "Male",
      "age": 45
    }
  ]
  



//il mio array deve mostrare solo l'età delle donne

const newArrayObjects = peoples.filter(peoples => peoples.sex === "Female");
console.log(newArrayObjects);


const filtered = newArrayObjects.map(item => item.age);
console.log(filtered);