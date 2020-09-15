let myLibrary = [];
let cardLibrary = [];

const form = document.querySelector('form');
const newBook = document.querySelector('.newbook');
const submit = document.querySelector('.submit');
const cards = document.querySelector('.cards');




const greatGatsby = new Book('F. Scott Fitzgerald', 'The Great Gatsby', '218', false);
myLibrary.push(greatGatsby);
createCard(greatGatsby);

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggle = function() {
  return this.isRead = !this.isRead;
}


function createCard(book) {
    console.log(book);
    let div = document.createElement('div');
    let title = document.createElement('h5');
    let author = document.createElement('h5');
    let pages = document.createElement('h5');
    let isRead = document.createElement('h5');
    let removeButton = document.createElement('button');
    let toggleButton = document.createElement('button');
    div.classList.add('card');
    title.classList.add('title');
    author.classList.add('author');
    pages.classList.add('pages');
    isRead.classList.add('isRead');
    removeButton.classList.add('removeButton');
    toggleButton.classList.add('toggleButton');
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    isRead.textContent = book.isRead ? 'Read' : 'Unread';
    removeButton.textContent = 'Remove';
    toggleButton.textContent = 'Toggle Read Status';
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(isRead);
    div.appendChild(removeButton);
    div.appendChild(toggleButton);
    cards.appendChild(div);
    cardLibrary.push(book);
}
function addBookToLibrary(e) {
    e.preventDefault();
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let pages = document.getElementById('pages').value;
    let isRead = document.getElementById('isRead').checked;
    let newCard = new Book(author, title, pages, isRead);
    myLibrary.push(newCard);
    resetForm(e.target);

    for (i = 0; i < myLibrary.length; i++) {
        if (cardLibrary.includes(myLibrary[i])){
            continue;
        } else {
            createCard(myLibrary[i]);
        }
    }
};

function resetForm(form) {
    const inputs = form.getElementsByTagName( "input" );
  
    for ( let input of inputs ) {
      switch( input.type ) {
        case "text":
          input.value = '';
          break;
        case "number":
          input.value = '';
          break;
        case "checkbox":
          input.checked = false;
          break;
      }
    }
  }


newBook.addEventListener('click', function(){
    if (form.style.opacity == 1) {
        form.style.opacity = 0; 
        newBook.classList.remove('active');
    } else {
        form.style.opacity = 1;
        newBook.classList.add('active');
    }

});

// // removeBtn.addEventListener('click', function(e) {
// //   console.log(e);
//   if (e.target.textContent = 'Read') {
//     e.target.textContent = 'Unread';
//   }  if (e.target.textContent = 'unread') {
//     e.target.textContent = 'Read';
//   // }
// // });

form.addEventListener('submit', addBookToLibrary) 

