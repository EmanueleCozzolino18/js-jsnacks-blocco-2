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

// funzione che rimuove il primo elemento dell'array

function rimuoviDallaTesta(array1) {

    const arrayNew = [];

    for (let i = 0; i < contaElementi(array1) - 1; i++) {
        arrayNew[i] = array1[i + 1];
    }

    return arrayNew;
}

// stampo in console l'array risultante
console.log('Final array:', rimuoviDallaTesta(myDesktop));

