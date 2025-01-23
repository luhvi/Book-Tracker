const enterName = document.getElementById('enterName');
const enterAuthor = document.getElementById('enterAuthor');
const mainContainer = document.getElementById('mainContainer');
const enterNameButton = document.getElementById('enterNameButton');
const enterAuthorButton = document.getElementById('enterAuthorButton');

enterName.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addBook();
    clearInput();
  }
});

enterNameButton.addEventListener('click', () => {
  addBook();
  clearInput();
});

enterAuthor.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addBook();
    clearInput();
  }
});

enterAuthorButton.addEventListener('click', () => {
  addBook();
  clearInput();
});

const addBook = () => {
  if (enterName.value !== '' && enterAuthor.value !== '') {
    const newBook = document.createElement('div');
    newBook.className = 'new-book';
    const bookName = document.createElement('div');
    bookName.textContent = `Name: ${enterName.value}`;
    const bookAuthor = document.createElement('div');
    bookAuthor.textContent = `Author: ${enterAuthor.value}`;
    newBook.appendChild(bookName);
    newBook.appendChild(bookAuthor);
    mainContainer.appendChild(newBook);
  }
};

const clearInput = () => {
  if (enterName.value !== '' && enterAuthor.value !== '') {
    enterName.value = '';
    enterAuthor.value = '';
  }
};
