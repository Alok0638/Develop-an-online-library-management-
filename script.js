const books = [
    { title: "Web Technology", author: "Dr Rochak Swami", available: true },
    { title: "java", author: "Alok Malhotra", available: false },
    { title: "python", author: "John", available: true }
];

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results-container');

function searchBooks(query) {
    resultsContainer.innerHTML = '';
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) || 
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredBooks.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        filteredBooks.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            bookDiv.innerHTML = `
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Status: ${book.available ? 'Available' : 'Not Available'}</p>
                <button onclick="reserveBook('${book.title}')">Reserve</button>
            `;
            resultsContainer.appendChild(bookDiv);
        });
    }
}

function reserveBook(title) {
    alert(`You reserved ${title}`);
}

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== '') {
        searchBooks(query);
    }
});
