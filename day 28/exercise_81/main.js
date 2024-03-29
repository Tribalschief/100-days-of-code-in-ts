"use strict";
function replaceWord(sentence, oldWord, newWord) {
    return sentence.replace(new RegExp(oldWord, "g"), newWord);
}
const sentence = "i love Javascript, but i prefer Javascript over typescript";
const replaceSen = replaceWord(sentence, "Javascript", "Typescript");
console.log(replaceSen);
