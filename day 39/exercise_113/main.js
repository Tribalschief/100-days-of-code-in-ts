"use strict";
let season = Math.floor(Math.random() * 12) + 1;
switch (season) {
    case 11:
    case 12:
    case 1:
        console.log("Winter Season");
        break;
    case 2:
    case 3:
    case 4:
        console.log("Spring Season");
        break;
    case 5:
    case 6:
    case 7:
        console.log("Summer Season");
    case 8:
    case 9:
    case 10:
        console.log("Autumn Season");
}
