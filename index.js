import displayPage from './modules/display.js';
import addBookToArray from './modules/addBook.js';
import { getLocalStorage, setLocalStorage } from './modules/localstore.js';
import displayTime from './modules/luxon.js';

const bookForm = document.getElementById('book-form');
const titleForm = bookForm.elements['title-input'];
const authorForm = bookForm.elements['author-input'];
const bookList = document.getElementById('books-list');
const dateTime = document.getElementById('date-time');
const contact = document.querySelector('#nav-contact');
const navList = document.getElementById('nav-list');
const navAdd = document.getElementById('nav-add');
const listContainer = document.querySelector('.list-container');
const formContainer = document.querySelector('.form-container');
const contactContainer = document.querySelector('.contact-container');

dateTime.innerHTML = displayTime();
let booksArray = [];

window.addEventListener('load', () => {
  booksArray = getLocalStorage();
  displayPage(bookList, booksArray);
  formContainer.style.display = 'none';
  contactContainer.style.display = 'none';
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleForm.value;
  const author = authorForm.value;
  if (title !== '' && author !== '') {
    booksArray = addBookToArray(title, author, booksArray);
    setLocalStorage(booksArray);
    titleForm.value = '';
    authorForm.value = '';
  }
});

navList.addEventListener('click', (e) => {
  e.preventDefault();
  formContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  listContainer.style.display = 'flex';
  booksArray = getLocalStorage();
  displayPage(bookList, booksArray);
});

navAdd.addEventListener('click', (e) => {
  e.preventDefault();
  contactContainer.style.display = 'none';
  listContainer.style.display = 'none';
  formContainer.style.display = 'flex';
  formContainer.style.flexDirection = 'column';
});

contact.addEventListener('click', (e) => {
  contactContainer.innerHTML = '';
  formContainer.style.display = 'none';
  listContainer.style.display = 'none';
  contactContainer.style.display = 'flex';
  const div = document.createElement('div');
  div.className = 'info-wrapper';
  div.innerHTML = `
<h2 class="contact-heading">Contact Information</h2>
<p class="contact-paragraph">If you have any questions or you want to say "Hello",</p>
<p class="contact-paragraph">you can reach out to us: </p>
<ul>
<li class="email">Our email: <a href="#"> info@awesomebooks.com</a></li>
<li class="phone">Our phone number: +54367869011</li>
<li class="address">Our address: Selam Road 33, 76401 Acra, Ghana</li>
</ul>
`;
  contactContainer.appendChild(div);
  e.preventDefault();
});