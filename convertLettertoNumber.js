/**
 * Convertire una stringa contenente lettere e numeri con un carattere separatore;
 * 
 * Date: 01.11.2023
 * Coder: Francesco Rapisarda - Corso 21 ITS Steve Jobs Academy
 */


function convertStringToObject(inputString, separator) {
    const result = {};                                //oggetto vuoto per memorizzare le associazioni lettera-numero

    const pairs = inputString.split(separator);       //divido la stringa in una serie di coppie lettera-numero usando il separatore
    
    for(const pair of pairs) {
        const[key, value] = pair.split(/\d/);        // Dividiamo ogni coppia in lettera e numero (uso regex: espressione irregolare \d matches a digit (equivalent to [0-9]))
        if(key) result[key] = parseInt(value, 10);
    }
    return result;
}


const inputString = "A1-B2-C3";
const separator = "-";
const result = convertStringToObject(inputString, separator);
console.log(result);
console.log(typeof(result));