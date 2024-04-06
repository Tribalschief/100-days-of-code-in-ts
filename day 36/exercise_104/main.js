"use strict";
const cond = (num) => { if ((num % 2 == 0) && (num % 3 == 0))
    return `${num} is divisible by 2 and 3`;
else
    return `${num} is not divisible by 2 and 3`; };
console.log(cond(15));
