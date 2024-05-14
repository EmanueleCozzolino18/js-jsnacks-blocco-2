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

