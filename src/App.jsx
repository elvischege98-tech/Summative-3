import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import AddBook from "./components/AddBook";
import AvailableBooks from "./components/AvailableBooks";

import "./App.css";

import { BooksContext } from "./context/BooksContext";
import { useBooksAPI } from "./hooks/useBooksAPI";

function App() {
    const booksData = useBooksAPI();

    return (
        <BooksContext.Provider value={booksData}>
            <BrowserRouter>
                <div className="app-wrapper">

                    <nav className="nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/add-book">Add Book</Link></li>
                            <li><Link to="/available-books">Available Books</Link></li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add-book" element={<AddBook />} />
                        <Route path="/available-books" element={<AvailableBooks />} />
                    </Routes> 

                    </div>

            </BrowserRouter>
        </BooksContext.Provider>
    );
}

export default App;



