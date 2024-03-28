let grades = [22,33,44,55,80,87]
const total:number = grades.reduce((a,b) => a+b,0)/grades.length
console.log(`Average: ${total.toFixed(2)}`)