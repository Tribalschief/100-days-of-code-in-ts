"use strict";
/*type CallbackFunction = (input:string) => void;

function processUserInput(callback:CallbackFunction): void {
   const userInput = "Hello World";
   callback(userInput);
}
const displayed:CallbackFunction = (input) => {
       console.log('User Says:', input);
}

processUserInput(displayed);

function greet(name:string, callback:any){
   const greeting = `Hello ${name}`
   callback(greeting);
}
greet('Ahmed', (message :any) => console.log(message))
function delayedComputation(callback:any){
  console.log('Starting computation');
  setTimeout(()=>{
    const result = 42;
    callback(result);
  },2000)
}
delayedComputation((result:any) => console.log(result))
// Corrected TypeScript code with the callback function returning a string
function attendance(callback: (name: string) => string): void {
   const message = callback('Ahmed');
   console.log(message);
 }
 
 function student(name: string): string {
   return `${name} is here`;
 }
 
 // Call `attendance` with `student` as the callback
 attendance(student);*/
function getUserInput(question, callback) {
    const simulatedInput = 'Simulated User Input';
    console.log(question);
    callback(simulatedInput);
}
getUserInput('Enter your name:', (input) => console.log(input));
