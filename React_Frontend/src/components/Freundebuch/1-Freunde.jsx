import React, { useEffect, useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-1.css";

import { Link } from "react-router-dom";

const Freunde1 = () => {
  const [fragen, setFragen] = useState([]);

  useEffect(() => {
    // API-Aufruf, um die Fragen zu holen
    fetch('http://localhost:3001/fragen')
      .then(response => response.json())
      .then(data => setFragen(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  return (
    <div id="frdiv">
      <img id="frbook" src="/img/book.png" alt="book" />

      <div>
        <h1 id="Headline">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          {fragen.map((frage, index) => (
            <li className="liste" key={index}>
              <label htmlFor={`question${index + 1}`}>
                <p id={`paragraph${index + 1}`}>{frage.frage}</p>
                <input id={`input${index + 1}`} type="text" />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button id="Freunde">
        <Link to="/2-Freunde">2.Seite</Link>
      </button>
    </div>
  );
};

export default Freunde1;
