// Empty array for books

const books = [];
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  /* Push books */
  books.push({
    title: title.value,
    author: author.value,
  });
  console.log(books);

  localStorage.setItem('books', JSON.stringify(books));
});