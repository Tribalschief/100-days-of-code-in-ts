export default function capatilize(str:string){
   let result = str.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '); 
   return result
}