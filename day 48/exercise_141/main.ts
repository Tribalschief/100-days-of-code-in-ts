let my_name = Promise.resolve('Ahmed');
let my_num = 42;
const promise = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'Hello')
})
Promise.all([my_name,my_num,promise]).then((values)=>{
    console.log(values)
})