var obj = {
    myName:'Ahmed',
    age:"21",
    country:"Pakistan",
    identity: function() {
return `my name is ${this.myName} and i am ${this.age} years old. I live in ${this.country}.`
    },
    arr: (abc:any) => {
        return abc
    }
}
console.log(obj.identity())
console.log(obj.arr(obj.identity()))

function greet(name:string) {
    return 'Hello, ' + name + '!';
  }

const greets = (name:any) => 'Hello, ' + name + '!';