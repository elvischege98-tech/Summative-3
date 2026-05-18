import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000/books";

export function useBooksAPI() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // GET books
    async function fetchBooks() {
        try {
            setLoading(true);

            const res = await fetch(BASE_URL);
            const data = await res.json();

            setBooks(data);
            setError(null);
        }   catch (err) { 
            setError("Failed to load books");
        } finally {
            setLoading(false);
        }
    }

    // POST book
    async function addBook(book) {
        try {
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(book),
            });

            const saved = await res.json();

            setBooks((prev) => [...prev, saved]);
        } catch (err) {
            setError("Failed to add book");
        }
        
    }

    async function deleteBook(id) {
        try {
            await fetch(`${BASE_URL}/${id}`, {
                method: "DELETE",
            });
            setBooks((prev) => prev.filter((book) => book.id !== id));
        } catch (err) {
            setError("Failed to delete book");
        }
    }

        async function updateBook(updatedBook) {
        try {
            const res = await fetch(`${BASE_URL}/${updatedBook.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedBook),
            });

            const data = await res.json();

            setBooks((prev) =>
                prev.map((book) =>
                    book.id === updatedBook.id ? data : book
                )
            );
        } catch (err) {
            setError("Failed to update book");
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return {
        books,
        loading,
        error,
        addBook,
        deleteBook
    };
}



