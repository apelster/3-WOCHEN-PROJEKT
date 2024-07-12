import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-1.css";

import { Link } from "react-router-dom";

const Freunde1 = () => {
  return (
    <div id="frdiv">
      <img id="frbook" src="/img/book.png" alt="book" />

      <div>
        <h1 id="Headline">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          <li>
            <label htmlFor="question1">
              <p id="paragraph">
                Wenn du eine Superkraft haben <br /> könntest, welche wäre es
                und warum?
              </p>
              <input id="input1" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question2">
              <p id="paragraph2">Was ist dein peinlichstes Erlebnis?</p>
              <input id="input2" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question3">
              <p id="paragraph3">Welcher Song bringt dich immer zum Tanzen?</p>
              <input id="input3" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question4">
              <p id="paragraph4">
                Wenn du eine berühmte Person treffen könntest,
                <br /> wer wäre es und warum?
              </p>
              <input id="input4" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question5">
              <p id="paragraph5">
                Was ist das Verrückteste, das du jemals gegessen hast?
              </p>
              <input id="input5" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde">
        <Link to="/2-Freunde">2.Seite</Link>
      </button>
    </div>
  );
};
export default Freunde1;
