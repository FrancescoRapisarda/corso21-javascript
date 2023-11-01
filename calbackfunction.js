//FUNZIONE CALLBACK

const f = () => {console.log("Hello World")};
const pippo = () => {console.log("Hello Pippo")};

const f2 = (q) => { q() };   //funzione all'interno di un altra funzione (accetta in ingresso un altra funzione)

f2(f); //q ha il riferimento di f

f2(pippo); //q ha il firerimento di f

//Una funzione di callback è una funzione che viene passata come paramentro in un'altra funzione!


