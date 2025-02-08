const books = [
    { titolo: "Dune", autore: "Frank Herbert", anno: 1965, genere: "Science Fiction" },
    { titolo: "Il problema dei tre corpi", autore: "Liu Cixin", anno: 2008, genere: "Science Fiction" },
    { titolo: "1984", autore: "George Orwell", anno: 1949, genere: "Dystopian" },
    { titolo: "La strada", autore: "Cormac McCarthy", anno: 2006, genere: "Post-Apocalyptic" }
];

function formatBookList(books) {
    return books.map(book => {
        let result = `${book.titolo} di ${book.autore}`;
        if (book.anno > 2000) {
            result += " - Moderno";
        }
        if (book.genere === "Science Fiction") {
            result += " - SciFi";
        }
        return result;
    });
}

const formattedBooks = formatBookList(books);
console.log(formattedBooks);
