import React from 'react';
import ReactDOM from "react-dom/client"
import { Outlet, Link} from "react-router-dom";

import './Footer.css';
// import './Impressum/Impressum.jsx'
import './Datenschutz/Datenschutz.jsx'

// ich brauch einen react router




const Footer = () => {
return (
    <footer className="footer">
        <img src="/img/Footer.png" alt="Footer Decoration" />

        <div>
            <nav>
                <ol>

                <Link to="/Datenschutz">Datenschutz</Link>

                {/* <li><a href="/Impressum" className="nav-button"></a></li>
                <li><a href="/AGB" className="nav-button">AGB</a></li>
                <li><a href="/Kontakt" className="nav-button">Kontakt</a></li> */}

                </ol>
            </nav>
        </div>

    </footer>
);
};

export default Footer;