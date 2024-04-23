"use strict";
console.log('Starting');
setTimeout(function afterthreeSeconds() {
    console.log('After 3 seconds we have event loop');
}, 3000);
console.log('End');
