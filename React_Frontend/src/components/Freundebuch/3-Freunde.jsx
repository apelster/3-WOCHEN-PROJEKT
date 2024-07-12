import React, { useEffect, useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-3.css";
import { Link } from "react-router-dom";

const Freunde3 = () => {
  const [fragen, setFragen] = useState([]);

  useEffect(() => {
    // API-Aufruf, um die Fragen zu holen
    fetch('http://localhost:3001/fragen3')
      .then(response => response.json())
      .then(data => setFragen(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  return (
    <main>
      <div>
        <img id="Book-Background5" src="/img/book.png" alt="" />

        <h1 id="Headline2">Beantworte kurz ein paar Fragen</h1>
        
        <ul>
          {fragen.map((frage, index) => (
            <li id="liste5" key={index}>
              <label htmlFor={`question${index + 11}`}>
                <p id={`paragraph${index + 11}`}>{frage.frage}</p>
                <input id={`input${index + 11}`} type="text" />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button id="Freunde5">
        <Link to="/4-Freunde">4.Seite</Link>
      </button>

      <button id="Zurück5">
        <Link to="/2-Freunde">2.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde3;
