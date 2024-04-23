function doSomeLongOperation() {
  // Simulate a long-running operation with a loop
  const start = Date.now();
  let end = start;

  // Loop for a set amount of time (e.g., 3 seconds)
  while (end < start + 3000) {
    end = Date.now();
  }

  return "Operation completed";
}
function syncFunction(){
  let result = doSomeLongOperation()
  console.log(result)
  console.log('After Operation')
}
syncFunction();

function doSomeLongOperationAsync(callback:any) {
  // Simulate a long-running operation with a timeout
  setTimeout(() => {
    // After the timeout, execute the callback function
    callback("Operation completed");
  }, 3000); // Wait for 3 seconds
}
function asyncFunction(callback:any){
  doSomeLongOperationAsync(function(result:any){
    callback(result)
  })
}

asyncFunction(function(result:any){
  console.log(result)
  console.log('After Operation')
})