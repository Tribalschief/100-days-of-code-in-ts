var string = "global scope variable";
console.log(string);
if(true) {
   var string = "local scope variable";
   console.log(string);
}
function getGlobalScope(name: string){ 
   if(true) {
      var string = "local scope variable";
   }  
   console.log(string);
}