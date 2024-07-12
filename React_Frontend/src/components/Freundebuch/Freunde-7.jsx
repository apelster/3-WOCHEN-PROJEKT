import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-7.css";
import { Link } from "react-router-dom";

const Freunde7 = () => {
  return (
    <main>

      <div>
        <img id="Book-Background13" src="/img/book.png" alt="" />

        <h1 id="Headline13">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste13">
            <label htmlFor="question1">
              <p id="paragraph31">
              Was war dein größter Fehlkauf?
              </p>
              <input id="input31" type="text" />
            </label>
          </li>

          <li id="liste13">
            <label htmlFor="question2">
              <p id="paragraph32">
              Welches ist das absurdeste Buch, <br /> das du je gelesen hast?
              </p>
              <input id="input32" type="text" />
            </label>
          </li>

          <li id="liste13">
            <label htmlFor="question3">
              <p id="paragraph33">
              Wenn du einen beliebigen Job auf <br /> der Welt haben könntest, welcher wäre es?
              </p>
              <input id="input33" type="text" />
            </label>
          </li>

          <li id="liste13">
            <label htmlFor="question4">
              <p id="paragraph34">
              Was ist dein Lieblingswitz über <br /> dein eigenes Sternzeichen?
                </p>
              <input id="input34" type="text" />
            </label>
          </li>

          <li id="liste13">
            <label htmlFor="question5">
              <p id="paragraph35">
              Welche Reality-Show würdest du gerne <br /> gewinnen und warum?
              </p>
              <input id="input35" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde13">
        <Link to="/8-Freunde">8.Seite</Link>
      </button>

      <button id="Zurück13">
        <Link to="/6-Freunde">6.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde7;
