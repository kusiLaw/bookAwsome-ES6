 // import {booksArray} from "./books.js"
 
  // Update booksArray with data from localStorage
 let getLocalStorage= () =>{
   // Check if data is in storage and convert to js object
   if (localStorage.getItem('bookList')) {
    return JSON.parse(localStorage.getItem('bookList'));
   }else{
    return []
   }
 }

const setLocalStorage =(arr) =>{
   localStorage.setItem('bookList', JSON.stringify(arr));
   // console.log("arryset is", arr)
 }

 export {getLocalStorage, setLocalStorage}