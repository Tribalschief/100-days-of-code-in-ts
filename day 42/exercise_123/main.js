"use strict";
let obj = {
    value: 'Traditional value',
    identity: function () {
        return `this is ${this.value}.`;
    },
    arr: () => {
        console.log('this is', this.value);
    }
};
console.log(obj.identity());
// identity is traditonal where arr is not 
