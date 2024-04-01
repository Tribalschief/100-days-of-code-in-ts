"use strict";
function stringToNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        console.log("Invalid input. Could not convert to number.");
    }
    else {
        return number;
    }
}
const numberString = "Ahmed";
const numberValue = stringToNumber(numberString);
if (numberValue !== null) {
    console.log("Converted number:", numberValue);
}
