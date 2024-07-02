import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <header className="header">
            
            <nav>
                <ul className="nav-links">
                    <li><a href="/" className="nav-button">Home</a></li>
                    <li><a href="/friends" className="nav-button">Freunde</a></li>
                    <li><a href="/design" className="nav-button">Design</a></li>
                    <li><a href="/downloads" className="nav-button">Downloads</a></li>
                </ul>
            </nav>
            <div className="logo">
            <img src="/img/teamforce.png" alt="logo" />
                
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </header>
    );
};
export default Header;