import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-7.css";
import { Link } from "react-router-dom";

const Freunde7 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="" />
      </div>

      <div>
        <img className="Book-Background" src="/img/book.png" alt="" />

        <h1 id="Headline3">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          <li className="liste">
            <label htmlFor="question1">
              <p id="paragraph16">
                Welche App auf deinem Handy könntest <br />du am wenigsten leben ohne?
              </p>
              <input id="input16" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question2">
              <p id="paragraph17">
                Was war das seltsamste Kompliment, <br />das du je bekommen hast?
              </p>
              <input id="input17" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question3">
              <p id="paragraph18">
                Wenn dein Leben ein Song wäre, welcher wäre es?
              </p>
              <input id="input18" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question4">
              <p id="paragraph19">Welches Wort findest du am lustigsten?</p>
              <input id="input19" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question5">
              <p id="paragraph20">
                Wenn du ein eigenes Restaurant hättest, <br /> welches Gericht wäre
                deine Spezialität?
              </p>
              <input id="input20" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde7">
        <Link to="/8-Freunde">8.Seite</Link>
      </button>

      <button id="Zurück7">
        <Link to="/6-Freunde">6.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde7;
