import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to the Book Management Online Systems (B.M.O.S)</h1>

            <div className="statement">
                <p>Hello 👋, here at <b>B.M.O.S</b> we give you an experience like no other when searching for books you desire to buy.</p>
            </div>
            <br />
            <div className="statement">
                <p>Moreover, you can also add new books to the system at any time.</p>
            </div>
            <br />
            <div className="statement">
                <p>Use the navigation links to manage your books, by adding new books or viewing available ones.</p>
            </div>
            <br />
            <div className="statement">
                <p>You can also update book information and delete books as needed in the available books section.Please enjoy you experience!</p>
            </div>
            <br />
            
                <footer className="footer">
                    <p>&copy; 2026 Book Management Online Systems (B.M.O.S). All rights reserved.</p>
                </footer>


        </div>
    );
}

export default Home;