import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [isImpressum, setIsImpressum] = useState(false);

  const liste = [
    "/impressum",
    "/kontakt",
    "/datenschutz",
    "/home",
    "/",
    "/login",
    "/register",
    "/confirm",
  ];

  useEffect(() => {
    setIsImpressum(liste.includes(location.pathname.toLowerCase()));
  }, [location]);

  const [link, setLink] = useState("");

  const generateLink = async (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    try {
      const response = await fetch("http://localhost:5000/generate_link");
      const data = await response.json();
      setLink(data.link);
    } catch (error) {
      console.error("Error generating link:", error);
    }
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="nav-button" to="/Home">
              Home
            </Link>
          </li>

          {!isImpressum && (
            <>
              <li>
                <Link className="nav-button" to="/Profil">
                  Profil
                </Link>
              </li>
              <li>
                <Link className="nav-button" to="/0-Freunde">
                  Freundebuch
                </Link>
              </li>
              <li>
                <Link
                  className="nav-button"
                  onClick={generateLink}
                  to="/MeineFreunde"
                >
                  Mein Freundebuch teilen
                </Link>
              </li>
              <li>
                <Link className="nav-button" to="/MeineFreunde">
                  Meine Freunde
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      {link && (
        <div className="generated-link">
          <a href="/0-Freunde" target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      )}

      {!isImpressum && (
        <>
          <div className="logo">
            <img id="logoH" src="/img/logo.png" alt="logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder=":lupe:" name="search" />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
