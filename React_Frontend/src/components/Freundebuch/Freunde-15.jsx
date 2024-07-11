import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-15.css";

import { Link } from "react-router-dom";

const Freunde15 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="" />
      </div>

      <div>
        <img className="Book-Background" src="/img/book.png" alt="" />
        <h1 id="Headline7">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          <li className="liste">
            <label htmlFor="question1">
              <p id="paragraph36">
              Wenn du eine Erfindung der Vergangenheit rückgängig <br /> machen könntest, welche wäre es?
                </p>
              <input id="input36" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question2">
              <p id="paragraph37">
              Was ist das merkwürdigste Ritual, das du <br /> vor Prüfungen hast?
              </p>
              <input id="input37" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question3">
              <p id="paragraph38">
              Wenn du in einem Märchen leben könntest, <br /> welches wäre es und warum?
              </p>
              <input id="input38" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question4">
              <p id="paragraph39">
              Was ist das Lustigste, was du je <br /> bei einer Familienfeier erlebt hast?
              </p>
              <input id="input39" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question5">
              <p id="paragraph40">
              Wenn du ein Lied schreiben müsstest, <br /> wovon würde es handeln?
              </p>
              <input id="input40" type="text" />
            </label>
          </li>
        </ul>

        <button id="Freunde15">
          <Link to="/16-Freunde">16.Seite</Link>
        </button>

        <button id="Zurück15">
          <Link to="/14-Freunde">14.Seite</Link>
        </button>
      </div>
    </main>
  );
};

export default Freunde15;
