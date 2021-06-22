/* 
1. Create classes
2. Add methods 
3. Paste rest of code
4. Add Local Storage
*/

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    //4.1-Create tr element
    const row = document.createElement('tr');
    //4.2-Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

    list.appendChild(row);
  }

  showAlert(message, className) {
    //8.1-Create div
    const div = document.createElement('div');
    //8.2-Add classes
    div.className = `alert ${className}`;
    //8.3-Add text
    div.appendChild(document.createTextNode(message));
    //8.4-Get parent
    const container = document.querySelector('.container');
    //8.5-Get form
    const form = document.querySelector('#book-form');
    //8.6-Insert alert
    container.insertBefore(div, form);

    //8.7-Timeout after 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

//L1-Local Storage Class
class Store {
  static getBooks() {
    //L3-get books from local storage
    let books;
    if (localStorage.getItem('books') === null) {
      let books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }
  //L5-display books
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI;

      //L6-Add book to UI
      ui.addBookToList(book);
    });

  }
  //L4-add book
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }
  //L9-passing ISBN to remove
  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    //L10-Set from Local Storage
    localStorage.setItem('books', JSON.stringify(books));
  }
}

//L7- DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//3-Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  //3.1-Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  //3.2-Instantiate book
  const book = new Book(title, author, isbn);

  //3.2-Instantiate UI
  const ui = new UI();

  //7-Validate
  if (title === '' || author === '' || isbn === '') {
    //7.1-Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    //3.3-Add book to list
    ui.addBookToList(book);

    //L2-Add to Local Storage
    Store.addBook(book);

    //9-Show success
    ui.showAlert('Book Added!', 'success');

    //5-Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

//10-Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

  //12-Instantiate UI
  const ui = new UI();

  //12.1-Delete book
  ui.deleteBook(e.target);

  //L8-Remove from Local Storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  //12.2-Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});