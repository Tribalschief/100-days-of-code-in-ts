function divide(a:number, b:number, callback:any) {
  if(b === 0){
    callback(new Error ("Cannot divide by zero"));
  } else {
    const result = a/b;
    callback(null, result);
  }
}
divide(10, 1, (err:any, result:any) => {
  if(err) {
    console.log(err);
  } else {
    console.log(result);
  }
})