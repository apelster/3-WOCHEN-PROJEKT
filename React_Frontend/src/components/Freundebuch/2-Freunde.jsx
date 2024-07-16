import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-2.css";
import { Link } from "react-router-dom";

const Freunde2 = () => {
  return (
    <main>

      <div>
        <img id="Book-Background13" src="/img/book.png" alt="" />

        <h1 id="Headline13">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste13">
            <label htmlFor="question1">
              <p id="paragraph31">
              Großes Abenteuer oder kleine Freuden im Alltag?
              
              <input id="radio1" type="radio" name="Answer1"/>
              <input id="radio2" type="radio" name="Answer1"/>
              </p>
            </label>
          </li>

          <li id="liste13">
            <label htmlFor="question2">
              <p id="paragraph32">
              Arbeit im Büro oder Home-Office?
              <input id="radio3" type="radio" name="Answer2"/>
              <input id="radio4" type="radio" name="Answer2"/>
              </p>

            </label>
          </li>

          <li id="liste13">
            <label htmlFor="question3">
              <p id="paragraph33">
              Actionreiches Videospiel oder Puzzle-Spiel?
              <input id="radio5" type="radio" name="Answer3"/>
              <input id="radio6" type="radio" name="Answer3"/>
              </p>
          
            </label>
          </li>

          <li id="liste13">
            <label htmlFor="question4">
              <p id="paragraph34">
              Frische Blumen oder künstliche Pflanzen?
              <input id="radio7" type="radio" name="Answer4"/>
              <input id="radio8" type="radio" name="Answer4"/>
              </p>

                </label>
          </li>

          <li id="liste13">
            <label htmlFor="question5">
              <p id="paragraph35">
              Popcorn oder Nachos im Kino?
              <input id="radio9" type="radio" name="Answer5" />
              <input id="radio10" type="radio" name="Answer5" />
              </p>

            </label>
          </li>
        </ul>
      </div>

      <button id="Freunde13">
        <Link to="/3-Freunde">3.Seite</Link>
      </button>

      <button id="Zurück13">
        <Link to="/1-Freunde">1.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde2;
