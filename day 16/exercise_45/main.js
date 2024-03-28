"use strict";
const num1 = [200, 500, 800];
const num2 = [300, 600, 900];
function compare(a, b) {
    const combine = [...a, ...b].sort((a, b) => a - b);
    return combine;
}
const sortedprice = compare(num1, num2);
console.log(sortedprice);
/*const combine = [...num1, ...num2].sort((a, b) => a - b)
console.log(combine)
*/
