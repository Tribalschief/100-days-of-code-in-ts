function lot_of_score(...array:number[]){
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  console.log(`the average score is ${average}`);
}
lot_of_score(34,56,78,98)