  class Books {
  constructor() {
    this.books = [];
    this.title = document.getElementById('title');
    this.author= document.getElementById('author');
    this.addButton = document.getElementById('submit');
    this.bookList = document.getElementById('bookList');

    this.displayBooks();

    this.addButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.addBooks();
      this.displayBooks();
    });
    this.bookList.addEventListener('click', (event) => {
      if (event.target.classList.contains('removeBtn')) {
        const bookIndex = event.target.dataset.bookIndex;
        this.removeBook(bookIndex);
      }
    });
  }

  // display books
  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.classList.add('book-infocss');
      li.innerHTML = `"${book.title}" by ${book.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('removeBtn');
      removeBtn.setAttribute('book-index', index);
      li.appendChild(removeBtn);
      this.bookList.appendChild(li);
    });
  }

  // add book method
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

  // remove book method
  removeBook(bookIndex) {
    this.books.splice(bookIndex, 1);
    localStorage.setItem('createdBooks', JSON.stringify(this.books));
    this.displayBooks();
  }
}

const awesomeBooks = new Books();

if (localStorage.getItem('createdBooks')) {
  awesomeBooks.books = JSON.parse(localStorage.getItem('createdBooks'));
  awesomeBooks.displayBooks();
}
