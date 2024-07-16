import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-6.css";
import { Link } from "react-router-dom";

const Freunde6 = () => {
  return (
    <main>
      <div>
        <img id="Book-Background21" src="/img/book.png" alt="" />

        <h1 id="Headline21">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste21">
            <label htmlFor="question1">
              <p id="paragraph51">
              Camping oder Hotelurlaub?
                <input id="radio21" type="radio" name="Answer11" />
                <input id="radio22" type="radio" name="Answer11" />
              </p>
            </label>
          </li>

          <li id="liste21">
            <label htmlFor="question2">
              <p id="paragraph52">
              Fensterplatz oder Gangplatz im Flugzeug?
                <input id="radio23" type="radio" name="Answer12" />
                <input id="radio24" type="radio" name="Answer12" />
              </p>
            </label>
          </li>

          <li id="liste21">
            <label htmlFor="question3">
              <p id="paragraph53">
              Energisch oder entspannt?
                <input id="radio25" type="radio" name="Answer13" />
                <input id="radio26" type="radio" name="Answer13" />
              </p>
            </label>
          </li>

          <li id="liste21">
            <label htmlFor="question4">
              <p id="paragraph54">
              Wissenschaft oder Kunst?
                <input id="radio27" type="radio" name="Answer14" />
                <input id="radio28" type="radio" name="Answer14" />
              </p>
            </label>
          </li>

          <li id="liste21">
            <label htmlFor="question5">
              <p id="paragraph55">
              Sammelleidenschaft oder Minimalismus?
                <input id="radio29" type="radio" name="Answer15" />
                <input id="radio30" type="radio" name="Answer15" />
              </p>
            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde21">
        <Link to="/Flipbook">Eintrag Speichern</Link>
      </button>

      <button id="Zurück21">
        <Link to="/5-Freunde">5.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde6;
