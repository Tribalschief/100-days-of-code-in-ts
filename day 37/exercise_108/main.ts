let age_group = (age:number) => {
       if(age <= 13){
           return "child"
       } else if (age <= 19){
            return "teenagers"
       } else {
        return "adult"
       }
}
console.log(age_group(23))