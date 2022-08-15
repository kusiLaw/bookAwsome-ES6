const removeBook = (title, booksArray) => booksArray.filter((book) => book.Title !== title);

export default removeBook;