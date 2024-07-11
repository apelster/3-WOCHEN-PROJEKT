import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-13.css";
import { Link } from "react-router-dom";

const Freunde13 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="" />
      </div>

      <div>
        <img className="Book-Background" src="/img/book.png" alt="" />
        <h1 id="Headline6">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          <li className="liste">
            <label htmlFor="question1">
              <p id="paragraph31">Was war dein größter Fehlkauf?</p>
              <input id="input31" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question2">
              <p id="paragraph32">
                Welches ist das absurdeste Buch, das du je gelesen hast?
              </p>
              <input id="input32" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question3">
              <p id="paragraph33">
                Wenn du einen beliebigen Job auf der Welt haben könntest, <br />{" "}
                welcher wäre es?
              </p>
              <input id="input33" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question4">
              <p id="paragraph34">
                Was ist dein Lieblingswitz über dein eigenes Sternzeichen?
              </p>
              <input id="input34" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question5">
              <p id="paragraph35">
                Welche Reality-Show würdest du gerne gewinnen <br /> und warum?
              </p>
              <input id="input35" type="text" />
            </label>
          </li>
        </ul>

        <button id="Freunde13">
          <Link to="/14-Freunde">14.Seite</Link>
        </button>

        <button id="Zurück13">
          <Link to="/12-Freunde">12.Seite</Link>
        </button>
      </div>
    </main>
  );
};

export default Freunde13;
