let vowel = ["a", "e", "i", "o", "u"];
function get_string(strs:string){
    let str = strs.toLowerCase();
    let result:string = "";
    for(let i=0;i<str.length;i++){
        if(!vowel.includes(str[i])){
            result += str[i];
        }
    }
    return result;
}
console.log(get_string("Ahmed"))