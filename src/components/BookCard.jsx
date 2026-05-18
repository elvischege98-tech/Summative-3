import {useBooksContext} from "../context/BooksContext";
import {useState} from "react";

export default function BookCard({ book }) {
    const { deleteBook,updateBook } = useBooksContext();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(book);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleUpdate() {
        updateBook({
            ...formData,
            price: Number(formData.price)
        });
        setIsEditing(false);
    }

    return (
        <div style={{
            background: "#995F2F",
            margin: "20px",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
            color: "#fff"
        }}>
            {isEditing ? (
                <>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <input
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />
                    <input
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                    <input
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />

                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <p>{book.category}</p>
                    <p>${Number(book.price).toFixed(2)}</p>

                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>

                    <button
                        onClick={() => deleteBook(book.id)}
                        style={{ marginLeft: "10px", background: "red", color: "#fff" }}
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}






