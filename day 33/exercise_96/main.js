"use strict";
const birth_Date = new Date(new Date().getFullYear(), 0, 11);
const current_Date = new Date();
if (current_Date > birth_Date) {
    birth_Date.setFullYear(birth_Date.getFullYear() + 1);
}
console.log(birth_Date);
