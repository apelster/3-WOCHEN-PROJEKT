import React from 'react';
import './Footer.css';

const Footer = () => {
return (
    <footer className="footer">
        <img src="/img/Footer.png" alt="Footer Decoration" />

        <div>
            <nav>
                <ol>
                    <li className='footer1'>IMPRESSUM</li>
                    <li className='footer1'>AGB</li>
                    <li className='footer1'>DATENSCHUTZ</li>
                </ol>
            </nav>
        </div>
    </footer>
);
};
export default Footer;