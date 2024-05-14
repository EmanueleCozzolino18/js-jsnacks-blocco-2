'use strict';

console.log("Script startato correttamente")

const inputArray = [1, 2, 36, 18, 95, 840, 87, 81, 89, 6, 26];

function contaElementi(input) { // FUNZIONE PER CONTARE ELEMENTI ARRAY

    let i = 0;

    while (input[i] !== undefined) {
        i++;
    }

    return i;
}

