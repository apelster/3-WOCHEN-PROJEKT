import React, { useEffect, useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-4.css";

import { Link } from "react-router-dom";

const Freunde4 = ({ profilId }) => {
  const [fragen, setFragen] = useState([]);
  const [antworten, setAntworten] = useState([]);

  useEffect(() => {
    // API-Aufruf, um die zufälligen Fragen zu holen
    fetch('http://3.124.9.130:3000/random-questions')
      .then(response => response.json())
      .then(data => setFragen(data))
      .catch(error => console.error('Error fetching random questions:', error));
  }, []);

  const handleSaveAnswers = () => {
    const answersToSave = fragen.map((frage, index) => ({
      frage: frage.frage,
      antwort: antworten[index] || ''
    }));

    fetch('http://3.124.9.130:3000/antworten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ profil_id: profilId, antworten: answersToSave })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Antworten erfolgreich gespeichert:', data);
      })
      .catch(error => {
        console.error('Error saving answers:', error);
      });
  };

  return (
    <div id="frdiv">
      <img id="frbook" src="/img/book.png" alt="book" />

      <div>
        <h1 id="Headline">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          {fragen.slice(18, 24).map((frage, index) => (
            <li key={index} className="liste">
              <label htmlFor={`question${index + 1}`}>
                <p id={`paragraph${index + 1}`}>{frage.frage}</p>
                <input
                  id={`input${index + 1}`}
                  type="text"
                  value={antworten[index] || ''}
                  onChange={(e) => {
                    const newAntworten = [...antworten];
                    newAntworten[index] = e.target.value;
                    setAntworten(newAntworten);
                  }}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button id="Freunde" onClick={handleSaveAnswers}>
        <Link to="/5-Freunde">5.Seite</Link>
      </button>
    </div>
  );
};

export default Freunde4;
