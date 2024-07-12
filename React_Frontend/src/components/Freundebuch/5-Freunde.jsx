import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-5.css";
import { Link } from "react-router-dom";

const Freunde5 = () => {
  return (
    <main>

      <div>
        <img id="Book-Background9" src="/img/book.png" alt="" />

        <h1 id="Headline9">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste9">
            <label htmlFor="question1">
              <p id="paragraph21">
              Was ist deine liebste Verschwörungstheorie?
              </p>
              <input id="input21" type="text" />
            </label>
          </li>

          <li id="liste9">
            <label htmlFor="question2">
              <p id="paragraph22">
              Welche Sportart würdest du erfinden, <br /> wenn du könntest?

              </p>
              <input id="input22" type="text" />
            </label>
          </li>

          <li id="liste9">
            <label htmlFor="question3">
              <p id="paragraph23">
              Was ist das lustigste Geschenk, <br /> das du jemals erhalten hast?

              </p>
              <input id="input23" type="text" />
            </label>
          </li>

          <li id="liste9">
            <label htmlFor="question4">
              <p id="paragraph24">
              Wenn du eine beliebige Sprache sofort <br /> fließend sprechen könntest, welche wäre es?

                </p>
              <input id="input24" type="text" />
            </label>
          </li>

          <li id="liste9">
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
        <Link to="/6-Freunde">6.Seite</Link>
      </button>

      <button id="Zurück9">
        <Link to="/4-Freunde">4.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde5;
