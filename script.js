const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".addBookBtn");
const addBookForm = document.querySelector("#bookForm");
const bookGrid = document.querySelector("#bookGrid");

let bookList = []


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
