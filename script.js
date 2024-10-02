document.addEventListener('DOMContentLoaded', () => {
    const addBookBtn = document.querySelector('.addBook');
    const modal = document.getElementById('addBookModal');
    const addBookForm = document.getElementById('addBookForm');
    const bookGrid = document.getElementById('bookGrid');

    addBookBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    addBookForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('bookName').value;
        const author = document.getElementById('bookAuthor').value;
        const pages = document.getElementById('bookPages').value;

        addBookToLibrary(name, author, pages);
        modal.style.display = 'none';
        addBookForm.reset();
    });

    function addBookToLibrary(name, author, pages) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${name}</h3>
            <p>Author: ${author}</p>
            <p>Pages: ${pages}</p>
        `;
        bookGrid.appendChild(bookCard);
    }
});
