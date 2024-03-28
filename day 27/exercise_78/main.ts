function objectProperty(obj:{[key:string]: any}){
    for(var prop in obj){
        console.log(`${prop}: ${obj[prop]}`);}
    }
let person = {
    name: 'Ahmed',
    age: 30,
    country: 'Pakistan'
}
objectProperty(person);