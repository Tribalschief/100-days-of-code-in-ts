"use strict";
function filterArray(array, criteria, callback) {
    const filterArray = array.filter(criteria);
    callback(filterArray);
}
filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], element => element % 2 === 0, (result) => console.log(result));
