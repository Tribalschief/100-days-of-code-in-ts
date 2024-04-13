"use strict";
let mul = (...items) => {
    let result = items.reduce((prev, curr) => prev * curr);
    return result;
};
console.log(mul(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
