// import {booksArray} from "./books.js";
import inArray from "./duplicate.js";

const addBookToArray = (title, author, arr) =>{
 // Check for empty book and add book to booksArray
   if (title !== "" && author !== "") {
    console.log(inArray(title, arr))
    if (inArray(title, arr)) {
       return arr;
     }else{
      return  [...arr, {
       id: title,
       Title: title,
       Author: author,
     }];
     }
   }
   
 };

 export default addBookToArray;

