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
          <li id="Imp">
          <Link to="/Impressum">Impressum</Link>
          </li>

          <li id="Dat">
          <Link to="/Datenschutz">Datenschutz</Link>
          </li>

          <li id="Kon">
            <Link to="/Kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
