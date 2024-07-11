import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-3.css";
import { Link } from "react-router-dom";

const Freunde3 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="" />
      </div>

      <div>
        <img className="Book-Background" src="/img/book.png" alt="" />
        <h1 id="Headline1">Beantworte kurz ein paar Fragen</h1>
        <ul className="input">
          <li className="liste">
            <label htmlFor="question1">
              <p id="paragraph6">
              Wenn du eine Zeitmaschine hättest, in welches<br /> Jahr würdest du reisen und warum?
              </p>
              <input id="input6" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question2">
              <p id="paragraph7">Was ist das Lustigste, das du jemals im<br /> Unterricht gemacht hast?</p>
              <input id="input7" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question3">
              <p id="paragraph8">Wenn du einen Tag mit jemandem tauschen<br /> könntest, wer wäre es und warum?</p>
              <input id="input8" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question4">
              <p id="paragraph9">
              Was ist deine Lieblingsschimpfwort?
              </p>
              <input id="input9" type="text" />
            </label>
          </li>

          <li className="liste">
            <label htmlFor="question5">
              <p id="paragraph10">
              Was ist die seltsamste Angewohnheit, die du hast?
              </p>
              <input id="input10" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde3">
        <Link to="/4-Freunde">4.Seite</Link>
      </button>

      <button id="Zurück3">
        <Link to="/2-Freunde">2.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde3;
