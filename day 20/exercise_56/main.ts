function createSpecialAdder(num:number){
        return function adder(x:number) {
          return num + x
     }
}
const myAdder = createSpecialAdder(5)
console.log(myAdder(10))