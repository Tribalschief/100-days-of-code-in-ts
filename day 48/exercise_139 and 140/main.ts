let result = new Promise((resolve, rejects)=>{
   setTimeout(()=>resolve("Hello world"), 2000)
})
result.then(message => {
   console.log(message)
}).catch(error => {
   console.log(error)
})