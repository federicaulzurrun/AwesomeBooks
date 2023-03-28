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
addBooks(){
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