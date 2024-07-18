import React, { useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-6.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Freunde6 = () => {
  const [answers, setAnswers] = useState({ Answer21: "", Answer22: "", Answer23: "", Answer24: "", Answer25: "" });
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const friendProfileId = searchParams.get("friendProfileId");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://3.70.29.185:3001/saveAnswers", {
        friendProfileId,
        answers: [answers.Answer21, answers.Answer22, answers.Answer23, answers.Answer24, answers.Answer25],
      });
      alert("Answers saved successfully");
      navigate(`/Flipbook?friendProfileId=${friendProfileId}`);
    } catch (error) {
      console.error("There was an error saving the answers!", error);
    }
  };

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
                <input id="radio21" type="radio" name="Answer21" value="Camping" onChange={handleChange} />
                <input id="radio22" type="radio" name="Answer21" value="Hotelurlaub" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste21">
            <label htmlFor="question2">
              <p id="paragraph52">
                Fensterplatz oder Gangplatz im Flugzeug?
                <input id="radio23" type="radio" name="Answer22" value="Fensterplatz" onChange={handleChange} />
                <input id="radio24" type="radio" name="Answer22" value="Gangplatz" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste21">
            <label htmlFor="question3">
              <p id="paragraph53">
                Energisch oder entspannt?
                <input id="radio25" type="radio" name="Answer23" value="Energisch" onChange={handleChange} />
                <input id="radio26" type="radio" name="Answer23" value="entspannt" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste21">
            <label htmlFor="question4">
              <p id="paragraph54">
                Wissenschaft oder Kunst?
                <input id="radio27" type="radio" name="Answer24" value="Wissenschaft" onChange={handleChange} />
                <input id="radio28" type="radio" name="Answer24" value="Kunst" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste21">
            <label htmlFor="question5">
              <p id="paragraph55">
                Sammelleidenschaft oder Minimalismus?
                <input id="radio29" type="radio" name="Answer25" value="Sammelleidenschaft" onChange={handleChange} />
                <input id="radio30" type="radio" name="Answer25" value="Minimalismus" onChange={handleChange} />
              </p>
            </label>
          </li>
        </ul>
      </div>
      <button id="Freunde21" onClick={handleSubmit}>
        Eintrag Speichern
      </button>
      <button id="Zurück21">
        <Link to={`/5-Freunde?friendProfileId=${friendProfileId}`}>5.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde6;
