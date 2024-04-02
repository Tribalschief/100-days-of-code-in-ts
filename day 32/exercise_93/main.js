"use strict";
let favorite_Num = [1, 3, 6, 4, 34, 5, 22, 9,];
const result = favorite_Num.reduce((prev, curr) => {
    return prev + curr;
});
console.log(result);
