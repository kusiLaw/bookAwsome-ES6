import booksArray from "./books";

const removeBook = (title, bookList) =>{
 booksArray = booksArray.filter((book) => book.Title !== title);
 bookList.innerHTML = '';
 this.setLocalStorage('bookList', this.booksArray);
 this.displayPage();
}