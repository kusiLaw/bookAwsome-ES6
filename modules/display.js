
import { getLocalStorage, setLocalStorage } from "./localstore.js";
import removeBook from "./removeList.js";


const displayPage = (bookList, booksArray) => {
 bookList.innerHTML = '';
 booksArray.forEach((book) => {
 bookList.innerHTML += `
 <div id="${book.Title}-div" >
   <p class="title-col" >"${book.Title}" by ${book.Author}</p>
   <button id="${book.Title}" type="submit" >Remove</button>
 </div>
 `;
 })

 booksArray.forEach((book) => {
 document.getElementById(`${book.Title}`).addEventListener('click', (e) =>{
  e.preventDefault();
  let rem =document.getElementById(`${e.target.parentNode.id}`)
  
   rem.remove()
  
  booksArray = removeBook(e.target.id, booksArray )
  setLocalStorage(booksArray)
   console.log(booksArray)
  displayPage(bookList, booksArray);
 })
})

};

export default displayPage;