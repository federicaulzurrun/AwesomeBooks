class Book {
  constructor() {
    this.books = [];
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
    this.addBook = document.getElementById('submit');
    this.bookList = document.getElementById('book-List');
    
    this.addBook.addEventListener('click', (e) => {
      e.preventDefault();
      this.addBook();
    })
  }
}

// add book
function addBooks() {
  if (this.title.value !== '' && this.author.value !== '') {
    const title = this.title.value;
    const author = this.author.value;

    books.push({ title, author });
    // save book to localstorage separatedly
    localStorage.setItem('createdBooks', JSON.stringify(this.books));
    this.title.value = ' ';
    this.author.value = ' ';
  }
}

function displayBooks () {
  this.bookList.innerHTML = ' ';
  this.books.forEach((books, i) => {
    const html = `
    <div class="newBook">
    <div class="book-info">
        <div class="title">${books[i].title}</div>
        <div class="author">${books[i].author}</div>
        </div>
        </div>`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('removeBtn');
      removeBtn.setAttribute('book-index', i);
      
    
    })
}
