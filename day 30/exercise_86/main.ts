function stringToNumber(input: string):number|null{
    const number = parseFloat(input);
    if(isNaN(number)){
        console.log("invalid Input, Could not convert to number");
        return null;
    } else {
        return number
    }
}
const input = stringToNumber("4.6");
if (input !== null){
    console.log(`Converted to ${input}`);
}