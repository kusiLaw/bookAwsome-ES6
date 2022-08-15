 import booksArray from "./books"
 
  // Update booksArray with data from localStorage
 const getLocalStorage= () =>{
   // Check if data is in storage and convert to js object
   if (localStorage.getItem('bookList')) {
     booksArray = JSON.parse(localStorage.getItem('bookList'));
   }
 }

const setLocalStorage =() =>{
   localStorage.setItem('bookList', JSON.stringify(booksArray));
 }
