let mul = (...items:number[]) => {
     let result:number = items.reduce((prev,curr)=>prev * curr)
     return result
}
console.log(mul(1,2,3,4,5,6,7,8,9,10))