interface Student_Template {
    name: string,
    age: number,
    classes: string
}
function blueprint(info: Student_Template) {
    console.log(`My name is ${info.name} and I am ${info.age} years old. I am in ${info.classes}`);
}

blueprint({ name: "Ahmed", age: 21, classes: "Quater 1" })