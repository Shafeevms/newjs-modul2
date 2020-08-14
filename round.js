'use strict';

let precise = +prompt('enter the number of decimal', 'n');
let firstNumber = +prompt('enter the number with long decimal', 'x.zzzzzzzzz');
let secondNumber = +prompt('enter the number with long decimal', 'y.zzzzzzzzz');

function roundDecimal(a, n) {
    a %= 1;
    a = Math.trunc(a *= Math.pow(10, n));
    return a;
}

function compare(a, b) {
    if (a > b) {
        return console.log('number ' + a + ' >' + ' number ' + b);
    } else if (a < b) {
        return console.log('number ' + a + ' <' + ' number ' + b);
    } else if (a === b) {
        return console.log('numbers are equal');
    }
}

let newFirstNumber = roundDecimal(firstNumber, precise);
let newSecondNumber = roundDecimal(secondNumber, precise);

compare(newFirstNumber, newSecondNumber);