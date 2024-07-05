import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link  className='nav-button' to="/Home">Home</Link></li>
                    <li><Link  className='nav-button' to="/Profil">Profil</Link></li>
                    <li><Link  className='nav-button' to="/Freunde">Freunde</Link></li>
                    <li><Link  className='nav-button' to="/">Was anderes</Link></li>
                </ul>
            </nav>
            <div className="logo">
            <img src="/img/logo.png" alt="logo" />
                
            </div>
            <div className="search-bar">
                <input type="text" placeholder="🔍" />
            </div>
        </header>
    );
};
export default Header;