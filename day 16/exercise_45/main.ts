const num1: number[] = [200,500,800]
const num2: number[] = [300,600,900]
 
// via function
function compare(a: number[], b: number[]) {
    const combine = [...a, ...b].sort((a, b) => a - b)
    return combine
}
const sortedprice = compare(num1, num2)
console.log(sortedprice)
// via simple
const combine = [...num1, ...num2].sort((a, b) => a - b)
console.log(combine)


