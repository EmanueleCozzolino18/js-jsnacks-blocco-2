'use strict';

console.log("Script startato correttamente")

const myDesktop = ['computer', 'mouse', 'tastiera', 'cuffie', 'microfono', 'monitor'];


// assegno ad una variabile length 
const myDesktopLenght = contaElementi(myDesktop);


// funzione per contare gli elementi di un array

function contaElementi(input) {

    let i = 0;

    while (input[i] !== undefined) {
        i++;
    }

    return i;
}

// funzione che rimuove l'ultimo elemento della coda

function rimuoviDallaCoda(array1) {

    const arrayNew = [];

    for (let i = 0; i < contaElementi(array1) - 1; i++) {
        arrayNew[i] = array1[i];
    }

    return arrayNew;
}

//Risultato
console.log('Risultato', rimuoviDallaCoda(myDesktop));