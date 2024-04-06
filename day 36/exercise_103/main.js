"use strict";
const leapYear = (num) => { if (num % 4 == 0)
    return `${num} is a leap year`;
else
    return `${num} is a not a leap year`; };
console.log(leapYear(2022));
