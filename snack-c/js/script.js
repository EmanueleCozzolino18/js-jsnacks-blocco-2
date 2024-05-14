'use strict';

console.log("Script startato correttamente")

const myDesktop = ['computer', 'mouse', 'tastiera', 'cuffie', 'microfono', 'monitor'];

// funzione 
function stampa(myArrayDesktop) {
    let string = '';
    let i = 0;
    while (myArrayDesktop[i] !== undefined) {
        if (i == 0) {
            string += `${myArrayDesktop[i]}`;
            i++;
        } else {
            string += `, ${myArrayDesktop[i]}`;
            i++;
        }
    }

    return string;
}


console.log(stampa(myDesktop));