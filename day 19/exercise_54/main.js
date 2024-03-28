"use strict";
function calculate_average(grade) {
    let sum = 0;
    for (let i = 0; i < grade.length; i++) {
        sum += grade[i];
    }
    return sum / grade.length;
}
let grades = [1, 78, 6];
console.log(`Average: ${calculate_average(grades)}`);
