"use strict";
function createSpecialAdder(num) {
    return function adder(x) {
        return num + x;
    };
}
const myAdder = createSpecialAdder(5);
console.log(myAdder(10));
