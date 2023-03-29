//  dynamic creation of added books
const addedBooks = document.querySelector('#book-list');
// Empty array for books
let books = [];
let removeBtn = [];
const submit = document.querySelector('#submit');

// function to add new books to the book array
function addBooks() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  // if statement to push new book into array if empty it won't be added
  if (title.value !== '' && author.value !== '') {
    books.push({
      title: title.value,
      author: author.value,
    });
    // save book to localstorage separatedly
    localStorage.setItem('createdBooks', JSON.stringify(books));
    title.value = ' ';
    author.value = ' ';
  }
}

// remove a book from books array
function remove(index) {
  books.splice(index, 1);
  localStorage.setItem('createdBooks', JSON.stringify(books));
}

// inject book in HTML and print it if added or removed
function print() {
  addedBooks.innerHTML = ' ';
  for (let i = 0; i < books.length; i += 1) {
    const html = `
    <div class="newBook">
    <div class="book-info">
        <div class="title">${books[i].title}</div>
        <div class="author">${books[i].author}</div>
        </div>
        <div class="removeBtnCont">
        <button class="removeBook">Remove Book</button>
        </div>
        </div>`;
    addedBooks.innerHTML += html;
  }

  // create Remove button dynamically
  removeBtn = document.querySelectorAll('.removeBook');
  for (let i = 0; i < books.length; i += 1) {
    removeBtn[i].addEventListener('click', () => {
      remove(i);
      print();
    });
  }
}

// print local storage when window loads

window.addEventListener('load', () => {
  if (localStorage.getItem('createdBooks')) {
    books = JSON.parse(localStorage.getItem('createdBooks'));
  }
  print();
});
submit.addEventListener('click', (e) => {
  e.preventDefault();
  addBooks();
  print();
});
