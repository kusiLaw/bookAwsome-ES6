import inArray from './duplicate.js';

const addBookToArray = (title, author, arr) => {
  // Check for empty book and add book to booksArray
  if (title !== '' && author !== '') {
    if (inArray(title, arr)) {
      return arr;
    }
    return [...arr, {
      id: title,
      Title: title,
      Author: author,
    }];
  }
  return arr;
};

export default addBookToArray;
