import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import AvailableBooks from "./components/AvailableBooks";

function App() {
  return (
    <>
       <BrowserRouter>
       <div>
            <nav>
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
      
    </>
  );
}
export default App;

