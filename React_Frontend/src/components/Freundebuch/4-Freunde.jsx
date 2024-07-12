import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-4.css";
import { Link } from "react-router-dom";

const Freunde4 = () => {
  return (
    <main>

      <div>
        <img id="Book-Background7" src="/img/book.png" alt="" />

        <h1 id="Headline7">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste7">
            <label htmlFor="question1">
              <p id="paragraph16">
              Welche App auf deinem Handy könntest <br /> du am wenigsten leben ohne?
              </p>
              <input id="input16" type="text" />
            </label>
          </li>

          <li id="liste7">
            <label htmlFor="question2">
              <p id="paragraph17">
              Was war das seltsamste Kompliment, <br />das du je bekommen hast?
              </p>
              <input id="input17" type="text" />
            </label>
          </li>

          <li id="liste7">
            <label htmlFor="question3">
              <p id="paragraph18">
              Wenn dein Leben ein Song wäre, welcher wäre es?
              </p>
              <input id="input18" type="text" />
            </label>
          </li>

          <li id="liste7">
            <label htmlFor="question4">
              <p id="paragraph19">
              Welches Wort findest du am lustigsten?
                </p>
              <input id="input19" type="text" />
            </label>
          </li>

          <li id="liste7">
            <label htmlFor="question5">
              <p id="paragraph20">
              Wenn du ein eigenes Restaurant hättest, <br /> welches Gericht wäre deine Spezialität?
              </p>
              <input id="input20" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde7">
        <Link to="/5-Freunde">5.Seite</Link>
      </button>

      <button id="Zurück7">
        <Link to="/3-Freunde">3.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde4;
