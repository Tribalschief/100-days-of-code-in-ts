function getCurrentDate(){
    let current_date = new Date();
    let  dd = current_date.getDate()
    let mm = current_date.getMonth() + 1 // month are zero based
    let yyyy = current_date.getFullYear()
    return `${dd.toString().padStart(2)} ${mm.toString().padStart(2)} ${yyyy}`
}
console.log(getCurrentDate())