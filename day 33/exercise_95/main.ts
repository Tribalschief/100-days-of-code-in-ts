function daysUntilNewYear(){
    const current_date = new Date()
    const new_year = new Date(current_date.getFullYear() + 1, 0, 1) 
    const diff = new_year.getTime() - current_date.getTime()
    const one_day = 1000 * 60 * 60 * 24
    const daysLeft = Math.ceil(diff / one_day);
    return daysLeft
}
console.log(daysUntilNewYear())