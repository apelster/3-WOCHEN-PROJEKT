import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [link, setLink] = useState('');

    const generateLink = async (event) => {
        event.preventDefault(); // Verhindert das Standardverhalten des Links
        try {
            const response = await fetch('http://localhost:5000/generate_link');
            const data = await response.json();
            setLink(data.link);
        } catch (error) {
            console.error('Error generating link:', error);
        }
    };

    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link className='nav-button' to="/Home">Home</Link></li>
                    <li><Link className='nav-button' to="/Profil">Profil</Link></li>
                    <li><Link className='nav-button' to="/Freundebuch">Freundebuch</Link></li>
                    <li><a href="/" className='nav-button' onClick={generateLink}>Mein Freundebuch teilen</a></li>
                    <li><Link className='nav-button' to="/MeineFreunde">Meine Freunde</Link></li>

                </ul>
            </nav>
            {link && (
                <div className="generated-link">
                    <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                </div>
            )}
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
