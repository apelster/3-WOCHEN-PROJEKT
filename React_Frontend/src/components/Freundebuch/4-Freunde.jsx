import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-4.css";
import { Link } from "react-router-dom";

const Freunde4 = () => {
  return (
    <main>
      <div>
        <img id="Book-Background17" src="/img/book.png" alt="" />

        <h1 id="Headline17">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste17">
            <label htmlFor="question1">
              <p id="paragraph41">
                Teezeit oder Kaffeepause?
                <input id="radio11" type="radio" name="Answer6" />
                <input id="radio12" type="radio" name="Answer6" />
              </p>
            </label>
          </li>

          <li id="liste17">
            <label htmlFor="question2">
              <p id="paragraph42">
                Joggen oder Yoga?
                <input id="radio13" type="radio" name="Answer7" />
                <input id="radio14" type="radio" name="Answer7" />
              </p>
            </label>
          </li>

          <li id="liste17">
            <label htmlFor="question3">
              <p id="paragraph43">
                Konzerte im kleinen Club oder <br /> große Arena?
                <input id="radio15" type="radio" name="Answer8" />
                <input id="radio16" type="radio" name="Answer8" />
              </p>
            </label>
          </li>

          <li id="liste17">
            <label htmlFor="question4">
              <p id="paragraph44">
                Neues ausprobieren oder  <br />Bewährtes genießen?
                <input id="radio17" type="radio" name="Answer9" />
                <input id="radio18" type="radio" name="Answer9" />
              </p>
            </label>
          </li>

          <li id="liste17">
            <label htmlFor="question5">
              <p id="paragraph45">
                Geduldig oder ungeduldig?
                <input id="radio19" type="radio" name="Answer10" />
                <input id="radio20" type="radio" name="Answer10" />
              </p>
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde17">
        <Link to="/5-Freunde">5.Seite</Link>
      </button>

      <button id="Zurück17">
        <Link to="/3-Freunde">3.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde4;
