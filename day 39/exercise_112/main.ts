let days:string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let opr:string = days[Math.floor(Math.random() * 7)]
switch(opr){
    case "Sunday":console.log("Today is Sunday");break
    case "Monday":console.log("Today is Monday");break
    case "Tuesday":console.log("Today is Tuesday");break
    case "Wednesday":console.log("Today is Wednesday");break
    case "Thursday":console.log("Today is Thursday");break
    case "Friday":console.log("Today is Friday");break
    case "Saturday":console.log("Today is Saturday");break
}