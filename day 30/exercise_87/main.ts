function isValueNaN(input: any):boolean{
    return isNaN(input)
}
console.log(isValueNaN(4.6))
console.log(isValueNaN("0"))
console.log(isValueNaN("hello"))