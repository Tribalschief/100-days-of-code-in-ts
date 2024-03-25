const different_types_of_item : any[] = [true , 9, 'nice',5,false,'work',undefined];
const keep_string  =  different_types_of_item.filter(abc =>{
if(typeof abc === 'string'){
    return abc ; 
}}
)
console.log(keep_string)