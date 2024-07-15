import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-8.css";
import { Link } from "react-router-dom";

const Freunde8 = () => {
  return (
    <main>

      <div>
        <img id="Book-Background15" src="/img/book.png" alt="" />

        <h1 id="Headline15">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste15">
            <label htmlFor="question1">
              <p id="paragraph36">
              Wenn du eine Erfindung der Vergangenheit rückgängig machen könntest, welche wäre es?
              </p>
              <input id="input36" type="text" />
            </label>
          </li>

          <li id="liste15">
            <label htmlFor="question2">
              <p id="paragraph37">
              Was ist das merkwürdigste Ritual, das du <br /> vor Prüfungen hast?

              </p>
              <input id="input37" type="text" />
            </label>
          </li>

          <li id="liste15">
            <label htmlFor="question3">
              <p id="paragraph38">
              Wenn du in einem Märchen leben könntest, <br /> welches wäre es und warum?

              </p>
              <input id="input38" type="text" />
            </label>
          </li>

          <li id="liste15">
            <label htmlFor="question4">
              <p id="paragraph39">
              Was ist das Lustigste, was du je <br /> bei einer Familienfeier erlebt hast?

                </p>
              <input id="input39" type="text" />
            </label>
          </li>

          <li id="liste15">
            <label htmlFor="question5">
              <p id="paragraph40">
              Wenn du ein Lied schreiben müsstest, <br /> wovon würde es handeln?

              </p>
              <input id="input40" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde15">
        <Link to="/9-Freunde">9.Seite</Link>
      </button>

      <button id="Zurück15">
        <Link to="/7-Freunde">7.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde8;
