// генератор случайных нечетных чисел в диапазоне n m

'use strict';

let n = +prompt('enter the number');
let m = +prompt('enter the number');
let i = +prompt('enter the quantity of incidental numbers');
let oddNumber;
let oddArrow = [];

function getRandom(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (oddArrow.length !== i) {
    oddNumber = getRandom(n, m);
    if (oddNumber %2 === 0) {
        continue;
    }
    oddArrow.push(oddNumber);
}

console.log(oddArrow);