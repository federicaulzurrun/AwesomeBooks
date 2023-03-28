class Book {
  constructor() {
    this.books = [];
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
    this.addBook = document.getElementById('submit');
    this.bookList = document.getElementById('bookList');
    this.displayBooks();
    this.addBook.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addBooks();
    });
    this.bookList.addEventListener('click', (e) => {
      if (e.target.classList.contains('removeBtn')) {
        const bookIndex = e.target.dataset.BookIndex;
        this.removeBook(bookIndex);
      }
    });
  }

  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.classList.add('book-info');
      li.innerHTML = `"${book.title}" by ${book.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('removeBtn');
      removeBtn.setAttribute('book-index', index);
      li.appendChild(removeBtn);
      this.bookList.appendChild(li);
    });
  }

  // add book
  addBooks() {
    if (this.title.value !== '' && this.author.value !== '') {
      const title = this.title.value;
      const author = this.author.value;
      this.books.push({ title, author });
      // save book to localstorage separatedly
      localStorage.setItem('createdBooks', JSON.stringify(this.books));
      this.title.value = ' ';
      this.author.value = ' ';
    }
  }

  // remove book
  removeBook(bookIndex) {
    this.books.splice(bookIndex, 1);
    localStorage.setItem('createdBooks', JSON.stringify(this.books));
    this.displayBooks();
  }
}

const awesomeBooks = new Book();

if (localStorage.getItem('createdBooks')) {
  awesomeBooks.books = JSON.parse(localStorage.getItem('createdBooks'));
  awesomeBooks.displayBooks();
}