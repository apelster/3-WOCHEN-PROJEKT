import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-19.css";

import { Link } from "react-router-dom";

const Freunde19 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="" />
      </div>

      <div>
        <img className="Book-Background" src="/img/book.png" alt="" />
        <h1 id="Headline9">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          <li className="liste">
            <label htmlFor="question1">
              <p id="paragraph46">
              Was ist dein geheimes Lieblingslied, <br /> das dir peinlich ist, laut zu hören?
                </p>
              <input id="input46" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question2">
              <p id="paragraph47">
              Wenn du ein Haus aus Süßigkeiten bauen könntest, <br /> welche Süßigkeit wäre die Hauptzutat?
              </p>
              <input id="input47" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question3">
              <p id="paragraph48">
              Was ist der lustigste Spitzname, den du <br /> je einem Lehrer gegeben hast?
              </p>
              <input id="input48" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question4">
              <p id="paragraph49">
              Welche Fernsehwerbung kannst <br /> du auswendig und warum?
              </p>
              <input id="input49" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question5">
              <p id="paragraph50">
              Was war das seltsamste Geburtstagsgeschenk, <br /> das du je erhalten hast?
              </p>
              <input id="input50" type="text" />
            </label>
          </li>
        </ul>

        <button id="Freunde19">
          <Link to="/20-Freunde">20.Seite</Link>
        </button>

        <button id="Zurück19">
          <Link to="/18-Freunde">18.Seite</Link>
        </button>
      </div>
    </main>
  );
};

export default Freunde19;
