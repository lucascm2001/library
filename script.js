const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    }
    info() {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
    };
}

function addBookToLibrary() {

    // grabbing the necessary information

    const name = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read-dropdown').value;

    const book = new Book(name, author, pages, read);
    myLibrary.push(book);
    const bookDataID = myLibrary.indexOf(book);
    const bookList = document.querySelector(".book-list-content");

    //style bookList content
    const parentDiv = document.createElement('div');
    parentDiv.setAttribute('data-id', bookDataID);

    parentDiv.style = ` display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        justify-items: center;
                        font-size: 15px;
                        padding: 15px;`;

    Object.keys(book).forEach((value) => {
        const divContainer = document.createElement('div');
        divContainer.textContent = book[value];
        parentDiv.appendChild(divContainer);
        console.log(book[value]);
    });

    // creating the delete button
    const deleteButton = document.createElement('button');
    //set button id to be 
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-id', bookDataID);
    parentDiv.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        // delete the row on click
        parentDiv.remove();
    })


    bookList.appendChild(parentDiv);


    //parent node

}


const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
});

