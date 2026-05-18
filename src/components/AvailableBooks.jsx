import { useBooksContext } from "../context/BooksContext";
import BookCard from "./BookCard";

function AvailableBooks() {
    const { books, loading, error } = useBooksContext();

    if (loading) return <p>Loading books...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Available Books</h1>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {Array.isArray(books) &&
                    books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
            </div>
        </div>
    );
}

export default AvailableBooks;  