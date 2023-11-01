/* 
Si sviluppi una funzione che cifri le parole in numeri es. 0A 1B 2C 3D e cosi via.
*/


let cifraParola = (parola) => {
    parola = parola.toUpperCase(); // Converto la parola in maiuscolo per uniformità
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let risultato = "";
  
    for (let i = 0; i < parola.length; i++) {
      const lettera = parola[i];
      const posizione = alfabeto.indexOf(lettera);
  
      if (posizione !== -1) {
        risultato += posizione.toString() + lettera + " ";
      }
    }
  
    return risultato.trim(); // Rimuovo lo spazio finale se presente
  }
  
  // Esempio di utilizzo:
  const parola = "HELLO";
  const parolaCifrata = cifraParola(parola);
  console.log(parolaCifrata); // Output: "7H 4E 11L 11L 14O"
  