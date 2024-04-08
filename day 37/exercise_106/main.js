"use strict";
let date = new Date().getHours();
if (date < 12) {
    console.log("Good morning!");
}
else if (date < 18) {
    console.log("Good afternoon!");
}
else {
    console.log("Good evening!");
}
