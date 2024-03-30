function Extract(str: string) {
    if (str.length >= 11){
        return str.substring(0,11)
    }else{
        return str
    }
   }
   let output = Extract("I love JavaScript")
   console.log(output)