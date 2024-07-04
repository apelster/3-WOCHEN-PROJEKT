import React from "react";
import "./Footer.css";
import "../Impressum/Impressum.jsx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/img/footer.png" alt="Footer" />

      <nav>
        <ul className="nav-bar-down">
          <li>
          <Link to="/Impressum">Impressum</Link>
          </li>

          <li>
          <Link to="/Datenschutz">Datenschutz</Link>
          </li>

          <li>
            <Link to="/Kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
