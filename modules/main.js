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

const book = new Book();

const getCurrentDate = () => {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const date = today.getDate();
  const year = today.getFullYear();
  const time = today.toLocaleTimeString();

  let suffix = '';
  switch (date) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }
  return `${month} ${date}${suffix} ${year}, ${time}`;
};

window.addEventListener('load', () => {
  book.displayPage();
  dateTime.innerHTML = getCurrentDate();
  formContainer.style.display = 'none';
  contactContainer.style.display = 'none';
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleForm.value;
  const author = authorForm.value;

  book.addBookToArray(title, author);
  book.setLocalStorage();
  book.displayPage();

  titleForm.value = '';
  authorForm.value = '';
});

navList.addEventListener('click', (e) => {
  e.preventDefault();
  formContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  listContainer.style.display = 'flex';
  book.displayPage();
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