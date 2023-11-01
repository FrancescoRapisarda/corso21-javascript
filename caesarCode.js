/*
Esercizio per casa:
Il cifrario di Cesare
Converte una lettera in un'altra lettera shiftando di n posizioni;
Consiglio: usare codice ascii!

I VARIANTE

ATTENZIONE: Il cifrario di Cesare è molto debole e può essere facilmente decifrato con metodi di forza bruta, 
ma è utile per comprendere i concetti di base della crittografia a scorrimento.

Date: 01.11.2023
Coder: Francesco Rapisarda - Corso 21 ITS Steve Jobs Academy
*/ 


function caesarCode(text, shift) {
    let encryptedText = "";

    for(let i = 0; i < text.length; i++) {
        const character = text[i];

        if(character.match(/[a-z]/i)) {     
            const actualAsciiCode = text.charCodeAt(i);
            let upperCase = false;

            if(character === character.toUpperCase()) {
                upperCase = true;
            }

            const asciiCodeEncrypted = (actualAsciiCode - 65 + shift) % 26 + 65;

            if(upperCase) {
                encryptedText += String.fromCharCode(asciiCodeEncrypted);
            } else {
                encryptedText += String.fromCharCode(asciiCodeEncrypted).toLowerCase();
            }
        } else {
            encryptedText += character;      // Se il carattere non è una lettera, lo aggiungiamo al testo cifrato così com'è!
        }
    }
    return encryptedText;
}


const originalText = "FRANCESCO";
const shift = 3;
const encryptedText = caesarCode(originalText, shift);

console.log("Testo cifrato: ", encryptedText)