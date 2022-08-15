import booksArray from "./books";
import inArray from "./duplicate";

const addBookToArray = (title, author) =>{
 // Check for empty book and add book to booksArray
   if (title && author) {
     if (!inArray(title)) {
       booksArray = [...booksArray, {
         id: title,
         Title: title,
         Author: author,
       }];
     }
   }
 }

 export default addBookToArray;
