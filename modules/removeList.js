
const removeBook = (title, booksArray) =>{
 return booksArray.filter((book) => book.Title !== title);
}

export default removeBook;