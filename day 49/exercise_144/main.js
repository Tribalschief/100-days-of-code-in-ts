"use strict";
function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error("Cannot divide by zero"));
    }
    else {
        const result = a / b;
        callback(null, result);
    }
}
divide(10, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
});
