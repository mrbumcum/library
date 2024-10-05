const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".addBookBtn");
const addBookForm = document.querySelector("#bookForm");
const bookGrid = document.querySelector("#bookGrid");

let bookList = []

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    bookList.push(book);
    displayBook(); 
}

function displayBook() {
    // Clear existing books to prevent duplicates
    bookGrid.innerHTML = '';
    
    for (let i = 0; i < bookList.length; i++) {
        const book = document.createElement("div");
        book.classList.add("book");  // Remove the dot

        const bookName = document.createElement("div");
        bookName.textContent = bookList[i].name;
        bookName.setAttribute("id", "bookName");
        book.appendChild(bookName);

        const bookAuthor = document.createElement("div");
        bookAuthor.textContent = bookList[i].author;
        bookAuthor.setAttribute("id", "bookAuthor");
        book.appendChild(bookAuthor);

        const bookPages = document.createElement("div");
        bookPages.textContent = bookList[i].pages;
        bookPages.setAttribute("id", "bookPages");
        book.appendChild(bookPages);

        const read = document.createElement("div");
        read.textContent = bookList[i].read ? "Read" : "Not Read";
        bookList[i].read ? read.classList.add("readYes") : read.classList.add("readNo");
        read.classList.add("read");
        book.appendChild(read);

        read.addEventListener("click", () => {
            bookList[i].read = !bookList[i].read;
            displayBook();
        })

        bookGrid.appendChild(book);
    }    
}

addBookBtn.addEventListener("click", () => {
    modal.style.display = "block";
    addBookBtn.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"
        addBookBtn.style.display = "block"
    }
})

addBookForm.addEventListener("submit", (event) => {
    modal.style.display = "none"
    addBookBtn.style.display = "block"
    event.preventDefault();

    const name = document.querySelector("#bookName").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    
    const book = new Book(name, pages, author, read);
    addBookToLibrary(book);
})