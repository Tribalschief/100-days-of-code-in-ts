function compare(a: number, b: number) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

const another = function (a: number, b: number) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

console.log(compare(2,3))
console.log(another(2,3))