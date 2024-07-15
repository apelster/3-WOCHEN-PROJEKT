import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-10.css";
import { Link } from "react-router-dom";

const Freunde10 = () => {
  return (
    <main>

      <div>
        <img id="Book-Background19" src="/img/book.png" alt="" />

        <h1 id="Headline19">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste19">
            <label htmlFor="question1">
              <p id="paragraph46">
                Was ist dein geheimes Lieblingslied, das dir <br /> peinlich ist, laut
                zu hören?
              </p>
              <input id="input46" type="text" />
            </label>
          </li>

          <li id="liste19">
            <label htmlFor="question2">
              <p id="paragraph47">
                Wenn du ein Haus aus Süßigkeiten bauen könntest, <br /> welche
                Süßigkeit wäre die Hauptzutat?
              </p>
              <input id="input47" type="text" />
            </label>
          </li>

          <li id="liste19">
            <label htmlFor="question3">
              <p id="paragraph48">
                Was ist der lustigste Spitzname, <br /> den du je einem Lehrer gegeben
                hast?
              </p>
              <input id="input48" type="text" />
            </label>
          </li>

          <li id="liste19">
            <label htmlFor="question4">
              <p id="paragraph49">
                Welche Fernsehwerbung kannst du auswendig <br /> und warum?
              </p>
              <input id="input49" type="text" />
            </label>
          </li>

          <li id="liste19">
            <label htmlFor="question5">
              <p id="paragraph50">
                Was war das seltsamste Geburtstagsgeschenk, <br /> das du je erhalten
                hast?
              </p>
              <input id="input50" type="text" />
            </label>
          </li>
        </ul>
      </div>

      <button id="Zurück19">
        <Link to="/9-Freunde">9.Seite</Link>
      </button>

      <button id="Freunde19">
        <Link to="/Flipbook">Eintrag Erstellen</Link>
      </button>
    </main>
  );
};

export default Freunde10;
