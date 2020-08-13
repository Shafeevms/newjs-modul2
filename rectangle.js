'use strict';

let x1 = +prompt('enter the coordinate a', 'x1');
let y1 = +prompt('enter the coordinate a', 'y1');
let x2 = +prompt('enter the coordinate b', 'x2');
let y2 = +prompt('enter the coordinate b', 'x2');

let sideA = sideWidth(x1, x2);
let sideB = sideWidth(y1, y2);
let area = sideA * sideB;

alert('Площадь = ' + area);

function sideWidth(a, b) {
    let side;
    if (a >= 0 && b >= 0) {
        if (a > b) {
            side = a - b;
        } else if (a < b) {
            side = b - a;
        } else if (a === b) {
            side = 0;
        }
    } else if (a < 0 && b < 0) {
        a = Math.abs(a);
        b = Math.abs(b);
        if (a > b) {
            side = a - b;
        } else if (a < b) {
            side = b - a;
        } else if (a === b) {
            side = 0;
        }
    } else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
        a = Math.abs(a);
        b = Math.abs(b);
        side = a + b;
    }
    return side;
}

// создать массив с координатами)) rectangle [ pointA{x:1, y:1}, pointB{...}, pointC{...}, pointD{..} ]

let pointA = makePoint(x1, y1); 
let pointC = makePoint(x2, y2); 
let pointB = makePoint(x1, y2); 
let pointD = makePoint(x2, y1); 

function makePoint(x, y) {
    return {
        x,
        y
    };
}

let rectangle = [pointA, pointB, pointC, pointD];

console.log(rectangle);