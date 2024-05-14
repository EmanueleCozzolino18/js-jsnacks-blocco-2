'use strict';

console.log("Script startato correttamente")

const inputArray = [1, 2, 36, 18, 95, 840, 87, 81, 89, 6, 26];

//Registriamo il numero che l'utente vule cercare
const uSearch = Number(prompt('Cerca un numero'));

//creiamo la funzione di ricerca per controllare se il numero è presente 
function trovaNumero(userSearch, inputArray) {

    // ciclo fin quando l'elemenmto è diverso da undefined
    let i = 0;
    while (inputArray[i] !== undefined) {
        //Se il numero del utente è presente mosta la poszione
        if (inputArray[i] === userSearch) {
            return console.log('Il numero è in posizone: ', i);
            // altrimenti incremento il contatore
        } else {
            i++;
        }
    }
    // se non entro nel ciclo vuol dire che non é presente
    return console.log('Errore numero non presente');
}

// invoco la funzione
trovaNumero(uSearch, inputArray);