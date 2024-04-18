var data = new Promise((resolve, reject) => {
 resolve('Ahmed')
 //reject('ahmed')
})
async function getdata(){
    try {
        const response = await data
        console.log(response)
    } catch (error) {
        console.log(error)
    }
} 
getdata()