import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-17.css";

import { Link } from "react-router-dom";

const Freunde17 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="" />
      </div>

      <div>
        <img className="Book-Background" src="/img/book.png" alt="" />
        <h1 id="Headline8">Beantworte kurz ein paar Fragen</h1>

        <ul className="input">
          <li className="liste">
            <label htmlFor="question1">
              <p id="paragraph41">
              Welche Superhelden-Kraft wäre im Alltag total nutzlos?
                </p>
              <input id="input41" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question2">
              <p id="paragraph42">
              Wenn du deinen eigenen Feiertag erfinden könntest, <br /> wie würde er aussehen?
              </p>
              <input id="input42" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question3">
              <p id="paragraph43">
              Was war der seltsamste Traum, den du je hattest?
              </p>
              <input id="input43" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question4">
              <p id="paragraph44">
              Welches Lebensmittel würdest du für <br /> immer aus deiner Küche verbannen?
              </p>
              <input id="input44" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question5">
              <p id="paragraph45">
              Welcher Disney-Bösewicht wärst du am liebsten?
              </p>
              <input id="input45" type="text" />
            </label>
          </li>
        </ul>

        <button id="Freunde17">
          <Link to="/18-Freunde">18.Seite</Link>
        </button>

        <button id="Zurück17">
          <Link to="/16-Freunde">16.Seite</Link>
        </button>
      </div>
    </main>
  );
};

export default Freunde17;
