import React, { useEffect, useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-2.css";
import { Link } from "react-router-dom";

const Freunde2 = () => {
  const [fragen, setFragen] = useState([]);

  useEffect(() => {
    // API-Aufruf, um die Fragen zu holen
    fetch('http://localhost:3001/fragen2')
      .then(response => response.json())
      .then(data => setFragen(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  return (
    <>
      <div>
        <img id="Book-Background3" src="/img/book.png" alt="" />

        <h1 id="Headline3">Beantworte kurz ein paar Fragen</h1>

        <ul id="input">
          {fragen.map((frage, index) => (
            <li id="liste" key={index}>
              <label htmlFor={`question${index + 1}`}>
                <p id={`paragraph${index + 6}`}>{frage.frage}</p>
                <input id={`input${index + 6}`} type="text" />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button id="Freunde3">
        <Link to="/3-Freunde">3.Seite</Link>
      </button>

      <button id="Zurück3">
        <Link to="/1-Freunde">1.Seite</Link>
      </button>
    </>
  );
};

export default Freunde2;
