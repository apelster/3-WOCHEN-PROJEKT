import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-3.css";
import { Link } from "react-router-dom";

const Freunde3 = () => {
  return (
    <main>

      <div>
        <img id="Book-Background5" src="/img/book.png" alt="" />

        <h1 id="Headline2">Beantworte kurz ein paar Fragen</h1>
        
        <ul>
          <li id="liste5">
            <label htmlFor="question1">
              <p id="paragraph11">Welche fiktive Figur wärst du gerne für einen Tag?
              </p>
              <input id="input11" type="text" />
            </label>
          </li>

          <li id="liste5">
            <label htmlFor="question2">
              <p id="paragraph12">Was ist das Dümmste, was du <br />je gemacht hast, ohne es zu bereuen?</p>
              <input id="input12" type="text" />
            </label>
          </li>

          <li id="liste5">
            <label htmlFor="question3">
              <p id="paragraph13">Wenn du ein eigenes Land gründen<br /> könntest, wie würdest du es nennen?</p>
              <input id="input13" type="text" />
            </label>
          </li>

          <li id="liste5">
            <label htmlFor="question4">
              <p id="paragraph14">
              Was ist dein Lieblingsessen, das du <br />heimlich nicht so gerne magst?
              </p>
              <input id="input14" type="text" />
            </label>
          </li>

          <li id="liste5">
            <label htmlFor="question5">
              <p id="paragraph15">
              Was ist die verrückteste Ausrede, die du je benutzt<br /> hast, um nicht zur Schule/Arbeit zu gehen?
              </p>
              <input id="input15" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde5">
        <Link to="/4-Freunde">4.Seite</Link>
      </button>

      <button id="Zurück5">
        <Link to="/2-Freunde">2.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde3;
