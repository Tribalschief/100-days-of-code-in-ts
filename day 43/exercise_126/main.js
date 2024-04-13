"use strict";
let obj = {
    myName: "Ahmed",
    myAge: "22",
    myIdentity: function innerFunction() {
        console.log(this.myAge);
        var arr = () => {
            console.log(`my name is ${this.myName} and my age is ${this.myAge}`);
        };
        arr();
    }
};
console.log(obj.myIdentity());
