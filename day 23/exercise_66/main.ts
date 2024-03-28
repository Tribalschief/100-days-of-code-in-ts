function divide_and_reminder(x:number,y:number){
    if(y === 0){
        throw new Error("Can't divide by zero");
    }
    const quotient = x / y;
    const reminder = x % y;
    {
        return quotient.toFixed(2);
        return reminder.toFixed(2);
    }
}
console.log(divide_and_reminder(10,3))