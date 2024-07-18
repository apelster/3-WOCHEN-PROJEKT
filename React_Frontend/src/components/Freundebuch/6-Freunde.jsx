import React, { useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-6.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Freunde6 = () => {
  const [answers, setAnswers] = useState({
    Answer21: "",
    Answer22: "",
    Answer23: "",
    Answer24: "",
    Answer25: ""
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const friendProfileId = searchParams.get("friendProfileId") || localStorage.getItem("friendProfileId");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (nextPage) => {
    try {
      const response = await axios.post("http://3.70.29.185:3001/saveAnswers", {
        friendProfileId,
        question1: answers.Answer21,
        question2: answers.Answer22,
        question3: answers.Answer23,
        question4: answers.Answer24,
        question5: answers.Answer25,
      });
      alert("Answers saved successfully");
      navigate(nextPage);
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
            <label htmlFor="Answer21">
              <p id="paragraph51">
                Camping oder Hotelurlaub?
                <input id="radio21" type="radio" name="Answer21" value="Camping" onChange={handleChange} />
                <input id="radio22" type="radio" name="Answer21" value="Hotelurlaub" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste21">
            <label htmlFor="Answer22">
              <p id="paragraph52">
                Fensterplatz oder Gangplatz im Flugzeug?
                <input id="radio23" type="radio" name="Answer22" value="Fensterplatz" onChange={handleChange} />
                <input id="radio24" type="radio" name="Answer22" value="Gangplatz" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste21">
            <label htmlFor="Answer23">
              <p id="paragraph53">
                Energisch oder entspannt?
                <input id="radio25" type="radio" name="Answer23" value="Energisch" onChange={handleChange} />
                <input id="radio26" type="radio" name="Answer23" value="entspannt" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste21">
            <label htmlFor="Answer24">
              <p id="paragraph54">
                Wissenschaft oder Kunst?
                <input id="radio27" type="radio" name="Answer24" value="Wissenschaft" onChange={handleChange} />
                <input id="radio28" type="radio" name="Answer24" value="Kunst" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste21">
            <label htmlFor="Answer25">
              <p id="paragraph55">
                Sammelleidenschaft oder Minimalismus?
                <input id="radio29" type="radio" name="Answer25" value="Sammelleidenschaft" onChange={handleChange} />
                <input id="radio30" type="radio" name="Answer25" value="Minimalismus" onChange={handleChange} />
              </p>
            </label>
          </li>
        </ul>
      </div>
      <button id="Freunde21" onClick={() => handleSubmit(`/Flipbook?friendProfileId=${friendProfileId}`)}>
        Eintrag Speichern
      </button>
      <button id="Zurück21">
        <Link to={`/5-Freunde?friendProfileId=${friendProfileId}`}>5.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde6;
