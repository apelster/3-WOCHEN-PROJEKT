import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-11.css";
import { Link } from "react-router-dom";

const Freunde11 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="" />
      </div>

      <div>
        <img className="Book-Background" src="/img/book.png" alt="" />
        <h1 id="Headline5">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          <li className="liste">
            <label htmlFor="question1">
              <p id="paragraph26">
              Welches ist dein Lieblings-TikTok-Trend?
              </p>
              <input id="input26" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question2">
              <p id="paragraph27">
              Wenn du für einen Tag das Gegenteil deines Geschlechts <br /> sein könntest, was würdest du tun?
              </p>
              <input id="input27" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question3">
              <p id="paragraph28">
              Was ist das lustigste Missgeschick, das dir in <br /> der Küche passiert ist?
              </p>
              <input id="input28" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question4">
              <p id="paragraph29">
              Welcher Gegenstand aus deiner Kindheit <br /> fehlt dir am meisten?
              </p>
              <input id="input29" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question5">
              <p id="paragraph30">
              Welches ist dein peinlichstes Foto?
              </p>
              <input id="input30" type="text" />
            </label>
          </li>
        </ul>
    
        <button id="Freunde11">
          <Link to="/12-Freunde">12.Seite</Link>
        </button>

        <button id="Zurück11">
          <Link to="/10-Freunde">10.Seite</Link>
        </button>
      </div>
    </main>
  );
};

export default Freunde11;
