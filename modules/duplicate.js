// import {booksArray} from "./books.js"

const inArray = (id, arr) => {
 // arr.forEach((element) => {
 //   if (element.Title === id) {
 //     console.log(" in array")
 //     return true;
 //   }
 //   console.log("not in array")

 //   return false;
 // });
 if(arr.length > 0){
  for(let element of arr ){
   console.log(element)
   if(element.Title === id){
    return true
   } 
  }
  return false
 }
 return false
}

export default inArray;