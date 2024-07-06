import React from "react";
import "../Profil/Profil-Design.css"
import "../Freunde/Freunde-2.css";
import { Link } from "react-router-dom";


const Freunde2 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="Foto von einer Feder" />
      </div>

      <div>

      <img className="Book-Background" src="/img/book.png" alt="" />

      <img
        id="Familienfoto2"
        src="/img/Familienfoto_2-removebg-preview.png"
        alt="Familienfoto"
      />      

      <h1 id="Headline1">Ich hab noch nie?</h1>

      <p id="Ja">Ja</p>
      <p id="Nein">Nein</p>


        <ul className="checkbox">
          <li className="liste1">
            <label htmlFor="question1">
              <p className="paragraph"></p>
              <input className="box" type="radio" name="question1" />
              <input className="box" type="radio" name="question1" />
            </label>
          </li>

          <li className="liste2">
            <label htmlFor="question2">
              <p className="paragraph"></p>
              <input className="box" type="radio" name="question2" />
              <input className="box" type="radio" name="question2" />
            </label>
          </li>

          <li className="liste3">
            <label htmlFor="question3">
              <p className="paragraph"></p>
              <input className="box" type="radio" name="question3" />
              <input className="box" type="radio" name="question3" />
            </label>
          </li>

          <li className="liste4">
            <label htmlFor="question4">
              <p className="paragraph"></p>
              <input className="box" type="radio" name="question4" />
              <input className="box" type="radio" name="question4" />
            </label>
          </li>

          <li className="liste5">
            <label htmlFor="question5">
              <p className="paragraph"></p>
              <input className="box" type="radio" name="question5" />
              <input className="box" type="radio" name="question5" />
            </label>
          </li>

          <li className="liste6">
            <label htmlFor="question6">
              <p className="paragraph"></p>
              <input className="box" type="radio" name="question6" />
              <input className="box" type="radio" name="question6" />
            </label>
          </li>

          <li className="liste7">
            <label htmlFor="question7">
              <p className="paragraph"></p>
              <input className="box" type="radio" name="question7" />
              <input className="box" type="radio" name="question7" />
            </label>
          </li>
        </ul>
      </div>


      <button id="Freunde2">
        <Link to="/3-Freunde">3.Seite</Link>
      </button>


      <button id="Zurück2">
        <Link to="/1-Freunde">1.Seite</Link>
      </button>
    
    </main>
  );
};

export default Freunde2;
