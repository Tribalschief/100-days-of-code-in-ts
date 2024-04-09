const countryCapital = new Map();
countryCapital.set("Pakistan","Karachi")
countryCapital.set("Palestine","Jerusalem")
countryCapital.set("Afghanistan","Kabul")
const contains = (obj:Map<string,string>) => (str:string) => {
    if(countryCapital.has(str)){
    console.log(`The capital of ${str} is ${countryCapital.get(str)}`)
    } else {
        console.log("No it doesn't")
    }
}
contains(countryCapital)("Afghanistan")

