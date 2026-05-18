import { useState, useRef } from "react";
import { useBooksContext } from "../context/BooksContext";

import "./AddBook.css";

function AddBook() {
    const { addBook } = useBooksContext();
    const titleRef = useRef();

    const [formData, setFormData] = useState({
        title: "",  
        author: "",
        category: "",
        price: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title: formData.title,
            author: formData.author,
            category: formData.category,
            price: Number(formData.price)
        };

        addBook(newBook);

        setFormData({
            title: "",
            author: "",
            category: "",
            price: ""
        });

        titleRef.current?.focus();
    }

    return (
        <div className="add-book-container">
            <h1 className="add-book-title">Add Book</h1>

            <form onSubmit={handleSubmit} className="add-book-form">
                <input
                    ref={titleRef}
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <input
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Author"
                />

                <input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Category"
                />

                <input
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    type="number"
                />

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;




