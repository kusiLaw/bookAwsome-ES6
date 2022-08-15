import booksArray from "./books"

const inArray = (id) => {
 booksArray.forEach((element) => {
   if (element.Title.includes(id)) {
     return true;
   }
   return false;
 });
}

export default inArray;