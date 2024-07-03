import React from 'react';
import './Footer.css';
// import './Impressum/Impressum.jsx'
import './Datenschutz/Datenschutz.jsx'



const Footer = () => {
return (
    <footer className="footer">
        <img src="/img/Footer.png" alt="Footer Decoration" />

        <div>
            <nav>
                <ol>
                    
                <li><a href="/Impressum" className="nav-button"></a></li>
                <li><a href="/AGB" className="nav-button">AGB</a></li>
                <li><a href="/Datenschutz" className="nav-button">Datenschutz</a></li>
                <li><a href="/Kontakt" className="nav-button">Kontakt</a></li>

                </ol>
            </nav>
        </div>

    </footer>
);
};

export default Footer;