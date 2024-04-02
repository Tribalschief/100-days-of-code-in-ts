let favorite_fruit = ["apple","mango","banana"];
let result = favorite_fruit.map(len => {
    return ` word ${len} with its length ${len.length}`
})
console.log(result)