class UserProfile {
    constructor(public name:string,public age: number) {}
    display = () => {
        console.log(`the name of user is ${this.name}`)
        console.log(`the age of user is ${this.age}`)
    }
}
const user = new UserProfile("Ahmed Yar Khan",21)
user.display()