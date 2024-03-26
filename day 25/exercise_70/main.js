"use strict";
function printNumber() {
    let initial_value = 0;
    console.log(`initial_value is ${initial_value}`);
    let updated_value = initial_value = 5;
    console.log(`initial_value is now ${initial_value}`);
    console.log(`updated_value is now ${updated_value}`);
}
printNumber();
