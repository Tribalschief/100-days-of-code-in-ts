function replaceWord(sentence:string,oldWord:string,newWord:string){
    return sentence.replace(new RegExp(oldWord,"g"),newWord);
}
const sentence = "i love Javascript";
const replaceSen = replaceWord(sentence,"Javascript","Typescript");
console.log(replaceSen);