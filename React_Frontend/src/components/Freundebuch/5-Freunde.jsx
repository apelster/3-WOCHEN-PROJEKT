import React, { useEffect, useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-5.css";
import { Link } from "react-router-dom";

const Freunde5 = () => {
  const [fragen, setFragen] = useState([]);

  useEffect(() => {
    // API-Aufruf, um die Fragen zu holen
    fetch('http://localhost:3001/fragen5')
      .then(response => response.json())
      .then(data => setFragen(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  return (
    <main>
      <div>
        <img id="Book-Background9" src="/img/book.png" alt="" />

        <h1 id="Headline9">Beantworte kurz ein paar Fragen</h1>

        <ul>
          {fragen.map((frage, index) => (
            <li id="liste9" key={index}>
              <label htmlFor={`question${index + 21}`}>
                <p id={`paragraph${index + 21}`}>{frage.frage}</p>
                <input id={`input${index + 21}`} type="text" />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button id="Freunde9">
        <Link to="/6-Freunde">6.Seite</Link>
      </button>

      <button id="Zurück9">
        <Link to="/4-Freunde">4.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde5;
