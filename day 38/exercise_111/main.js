"use strict";
let cc = new Map();
cc.set("Pakistan", "Karachi");
cc.set("Palestine", "Jerusalem");
cc.set("Canada", "ontario");
cc.forEach((value, key) => {
    console.log(`The capital of ${key} is ${value}`);
});
for (let x of cc) {
    console.log(x.toString());
}
