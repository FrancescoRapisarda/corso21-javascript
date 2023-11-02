/**
 * 
 * giovedì 02.11.2023
 * Function
 * 
 * Bocchi di codici riutilizzabili
 * Funzioni del browser string, replace, array, join, math, random
 * Funzioni e metodi (i metodi sono funzioni di oggetti)
 * Invocare una funzione
 * Funzioni anonime (sono funzioni che non hanno nome)
 * Scope e conflitti (scope globale e scope locale)
 * Innestare funzioni
 * Parametri delle funzioni
 * 
 */



function cucinaPasta() {
    console.log("tira fuori la pendola");
    console.log("mettere l'acqua");
    console.log("lasciare bollire");
    console.log("mettere sale");
    console.log("fate il sugo");
}


//INVOCARE UNA FUNZIONE
cucinaPasta();

let nome = "Francesco";     //variabile globale

function saluta() {
    let cognome = "Rapisarda";
    console.log("Ciao", nome, cognome);
    hello(cognome);     //funzione innestata!
}

saluta();


//console.log(nome);      //variabile globale (visibile in tutto il codice)
//console.log(cognome);   //variabile locale (visibile all'interno dello scope dove è stata dichiarata)


function hello(name) {      //Ho il parametro name? Mi devi dare un name!  -  Altrimenti? undefined
    console.log("hello:",name);
}


hello(nome);
hello();       //undefined (abbiamo dei problemi!)


