import React, { useEffect, useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-4.css";
import { Link } from "react-router-dom";

const Freunde4 = () => {
  const [fragen, setFragen] = useState([]);

  useEffect(() => {
    // API-Aufruf, um die Fragen zu holen
    fetch('http://localhost:3001/fragen4')
      .then(response => response.json())
      .then(data => setFragen(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  return (
    <main>
      <div>
        <img id="Book-Background7" src="/img/book.png" alt="" />

        <h1 id="Headline7">Beantworte kurz ein paar Fragen</h1>

        <ul>
          {fragen.map((frage, index) => (
            <li id="liste7" key={index}>
              <label htmlFor={`question${index + 16}`}>
                <p id={`paragraph${index + 16}`}>{frage.frage}</p>
                <input id={`input${index + 16}`} type="text" />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button id="Freunde7">
        <Link to="/5-Freunde">5.Seite</Link>
      </button>

      <button id="Zurück7">
        <Link to="/3-Freunde">3.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde4;
