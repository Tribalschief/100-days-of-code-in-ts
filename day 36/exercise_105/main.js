"use strict";
const compare = (str1, str2) => { if (str1.toLowerCase() === str2.toLowerCase())
    return `They are identical!`;
else
    return `They are not identical!`; };
console.log(compare("Ahmed", "aHMED"));
