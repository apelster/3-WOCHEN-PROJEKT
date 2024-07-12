import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-6.css";
import { Link } from "react-router-dom";

const Freunde6= () => {
  return (
    <main>

      <div>
        <img id="Book-Background11" src="/img/book.png" alt="" />

        <h1 id="Headline11">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste11">
            <label htmlFor="question1">
              <p id="paragraph26">
              Welches ist dein Lieblings-TikTok-Trend?
              </p>
              <input id="input26" type="text" />
            </label>
          </li>

          <li id="liste11">
            <label htmlFor="question2">
              <p id="paragraph27">
              Wenn du für einen Tag das Gegenteil deines Geschlechts <br /> sein könntest, was würdest du tun?
              </p>
              <input id="input27" type="text" />
            </label>
          </li>

          <li id="liste11">
            <label htmlFor="question3">
              <p id="paragraph28">
              Was ist das lustigste Missgeschick, <br /> das dir in der Küche passiert ist?
              </p>
              <input id="input28" type="text" />
            </label>
          </li>

          <li id="liste11">
            <label htmlFor="question4">
              <p id="paragraph29">
              Welcher Gegenstand aus deiner <br /> Kindheit fehlt dir am meisten?
                </p>
              <input id="input29" type="text" />
            </label>
          </li>

          <li id="liste11">
            <label htmlFor="question5">
              <p id="paragraph30">
              Welches ist dein peinlichstes Foto?
              </p>
              <input id="input30" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde11">
        <Link to="/7-Freunde">7.Seite</Link>
      </button>

      <button id="Zurück11">
        <Link to="/5-Freunde">5.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde6;
