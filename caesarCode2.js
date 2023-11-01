/*
Esercizio per casa:
Il cifrario di Cesare
Converte una lettera in un'altra lettera shiftando di n posizioni;
Consiglio: usare codice ascii!

II VARIANTE (ottimizzata)

ATTENZIONE: Il cifrario di Cesare è molto debole e può essere facilmente decifrato con metodi di forza bruta, 
ma è utile per comprendere i concetti di base della crittografia a scorrimento.

Date: 01.11.2023
Coder: Francesco Rapisarda - Corso 21 ITS Steve Jobs Academy
*/ 


function caesarCode(text, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let textEncrypted = "";                                 //conterrà il testo cifrato finale.

    for(let i = 0; i < text.length; i++) {
        const character = text[i].toUpperCase();            //trasformo il carattere in maiuscolo!

        if(alphabet.includes(character)) {                  //uso il metodo includes per verificare se il carattere corrente è una lettera dell'alfabeto
            const index = alphabet.indexOf(character);      //trovo l'indice del carattere nell'alfabeto utilizzando il metodo indexOf(). 
            const newIndex = (index + shift) % 26;          //quindi, calcolo il nuovo indice sommando il valore dello spostamento, assicurandomi che rimanga nell'intervallo da 0 a 25 (poiché ci sono 26 lettere nell'alfabeto).
            const characterEncrypted = alphabet[newIndex];  //uso il nuovo indice per ottenere il carattere cifrato dall'alfabeto.

            if(text[i] === text[i].toLowerCase()) {         //per mantenere la stessa lettera maiuscola o minuscola del testo originale, verifico se il carattere originale è maiuscolo o minuscolo e aggiungo il carattere cifrato corrispondente alla variabile textEncrypted nel formato appropriato.
                textEncrypted += characterEncrypted.toLowerCase();
            } else {
                textEncrypted += characterEncrypted;
            }
        } else {
            textEncrypted += text[i];                       //se il carattere corrente non è una lettera dell'alfabeto, lo aggiungo direttamente a textEncrypted senza cifrarlo.
        }
    }

    return textEncrypted;

}


const originalText = "SOPRA LA PANCA LA CAPRA CAMPA SOTTO LA PANCA LA CAPRA CREPA";
const shift = 3;
const newTextEncrypted = caesarCode(originalText, shift);

console.log("Il testo originario è: ", originalText, "\n\nIl testo cifrato nel CIFRARIO DI CESARE è: ", newTextEncrypted);