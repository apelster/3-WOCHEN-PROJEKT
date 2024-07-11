import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-9.css";
import { Link } from "react-router-dom";

const Freunde9 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="" />
      </div>

      <div>
        <img className="Book-Background" src="/img/book.png" alt="" />

        <h1 id="Headline4">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          <li className="liste">
            <label htmlFor="question1">
              <p id="paragraph21">
                Was ist deine liebste Verschwörungstheorie?
              </p>
              <input id="input21" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question2">
              <p id="paragraph22">
                Welche Sportart würdest erfinden,du<br /> wenn du könntest?
              </p>
              <input id="input22" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question3">
              <p id="paragraph23">
                Was ist das lustigste Geschenk,<br /> das du jemals erhalten hast?
              </p>
              <input id="input23" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question4">
              <p id="paragraph24">
                Wenn du eine beliebige Sprache sofort <br /> fließend sprechen
                könntest, welche wäre es?
              </p>
              <input id="input24" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question5">
              <p id="paragraph25">
                Welches Promi-Paar findest du am seltsamsten?
              </p>
              <input id="input25" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde9">
        <Link to="/10-Freunde">10.Seite</Link>
      </button>

      <button id="Zurück9">
        <Link to="/8-Freunde">8.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde9;
