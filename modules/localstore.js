// Update booksArray with data from localStorage
const getLocalStorage = () => {
  // Check if data is in storage and convert to js object
  if (localStorage.getItem('bookList')) {
    return JSON.parse(localStorage.getItem('bookList'));
  }
  return [];
};

const setLocalStorage = (arr) => {
  localStorage.setItem('bookList', JSON.stringify(arr));
};

export { getLocalStorage, setLocalStorage };