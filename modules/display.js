import addToPage from "./addToPage";
import booksArray from "./books"

const displayPage = (bookList) => {
 bookList.innerHTML = '';
 booksArray.forEach(addToPage);
}

export default displayPage