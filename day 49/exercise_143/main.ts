function filterArray(array:number[],criteria:(element:number)=>boolean, callback:any){
  const filterArray = array.filter(criteria);
  callback(filterArray);
}
filterArray([1,2,3,4,5,6,7,8,9,10], 
    element=>element % 2 === 0,
    (result:any)=> console.log(result)
)