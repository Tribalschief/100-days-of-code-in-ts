let percentage = (grade:number) => {
    if (grade >= 90) {
        return "A"
    } else if (grade >= 80) {
        return "B"
    } else if (grade >= 70) {
        return "C"
    } else if (grade >= 60) {
        return "D"
    } else {
        return "F"
    }
}
console.log(percentage(80))