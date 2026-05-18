import React from "react";
import './AddBook.css';

function AddBook(){
return(
    <>
    <div className="add-book-page">
        <h1>Add book</h1>
        <form className="add-book-form">
            <label>
                Title:
                <input type="text" name="title" placeholder="Enter book title" required/>
            </label>
            <label>
                Author:
                <input type="text" name="author" placeholder="Enter author name" required/>
            </label>
            <label>
                Price:
                <input type="number" name="price" placeholder="Enter price" required />
            </label>

            <button type="submit">Add Book</button>
        </form>
    </div>
    </>
)
}

export default AddBook; 