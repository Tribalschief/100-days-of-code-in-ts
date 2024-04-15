"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function capatilize(str) {
    let result = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    return result;
}
exports.default = capatilize;
