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

function displayBook(){

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
    const read = document.querySelector("#number").value;
    
    const book = new Book(name, pages, author, read);
    addBookToLibrary(book);
})