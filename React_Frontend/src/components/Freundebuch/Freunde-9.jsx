import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-9.css";
import { Link } from "react-router-dom";

const Freunde9 = () => {
  return (
    <main>

      <div>
        <img id="Book-Background17" src="/img/book.png" alt="" />

        <h1 id="Headline17">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste17">
            <label htmlFor="question1">
              <p id="paragraph41">
              Welche Superhelden-Kraft wäre im Alltag total nutzlos?

              </p>
              <input id="input41" type="text" />
            </label>
          </li>

          <li id="liste17">
            <label htmlFor="question2">
              <p id="paragraph42">
              Wenn du deinen eigenen Feiertag erfinden <br /> könntest, wie würde er aussehen?

              </p>
              <input id="input42" type="text" />
            </label>
          </li>

          <li id="liste17">
            <label htmlFor="question3">
              <p id="paragraph43">
              Was war der seltsamste Traum, den du je hattest?

              </p>
              <input id="input43" type="text" />
            </label>
          </li>

          <li id="liste17">
            <label htmlFor="question4">
              <p id="paragraph44">
              Welches Lebensmittel würdest du für <br /> immer aus deiner Küche verbannen?

              </p>
              <input id="input44" type="text" />
            </label>
          </li>

          <li id="liste17">
            <label htmlFor="question5">
              <p id="paragraph45">
              Welcher Disney-Bösewicht wärst du am liebsten?

              </p>
              <input id="input45" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde17">
        <Link to="/10-Freunde">10.Seite</Link>
      </button>

      <button id="Zurück17">
        <Link to="/8-Freunde">8.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde9;
