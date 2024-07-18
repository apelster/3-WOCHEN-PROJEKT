import React, { useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-5.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Freunde5 = () => {
  const [answers, setAnswers] = useState({
    Answer16: "",
    Answer17: "",
    Answer18: "",
    Answer19: "",
    Answer20: ""
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
        question1: answers.Answer16,
        question2: answers.Answer17,
        question3: answers.Answer18,
        question4: answers.Answer19,
        question5: answers.Answer20,
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
        <img id="Book-Background19" src="/img/book.png" alt="" />
        <h1 id="Headline19">Beantworte kurz ein paar Fragen</h1>
        <ul>
          <li id="liste19">
            <label htmlFor="Answer16">
              <p id="paragraph46">
                Was ist dein geheimes Lieblingslied, das dir <br /> peinlich ist, laut
                zu hören?
              </p>
              <input id="input46" type="text" name="Answer16" onChange={handleChange} />
            </label>
          </li>
          <li id="liste19">
            <label htmlFor="Answer17">
              <p id="paragraph47">
                Wenn du ein Haus aus Süßigkeiten bauen könntest,welche
                Süßigkeit wäre die Hauptzutat?
              </p>
              <input id="input47" type="text" name="Answer17" onChange={handleChange} />
            </label>
          </li>
          <li id="liste19">
            <label htmlFor="Answer18">
              <p id="paragraph48">
                Was ist der lustigste Spitzname, <br /> den du je einem Lehrer gegeben
                hast?
              </p>
              <input id="input48" type="text" name="Answer18" onChange={handleChange} />
            </label>
          </li>
          <li id="liste19">
            <label htmlFor="Answer19">
              <p id="paragraph49">
                Welche Fernsehwerbung kannst du auswendig <br /> und warum?
              </p>
              <input id="input49" type="text" name="Answer19" onChange={handleChange} />
            </label>
          </li>
          <li id="liste19">
            <label htmlFor="Answer20">
              <p id="paragraph50">
                Was war das seltsamste Geburtstagsgeschenk, <br /> das du je erhalten
                hast?
              </p>
              <input id="input50" type="text" name="Answer20" onChange={handleChange} />
            </label>
          </li>
        </ul>
      </div>
      <button id="Freunde19" onClick={() => handleSubmit(`/6-Freunde?friendProfileId=${friendProfileId}`)}>
        6.Seite
      </button>
      <button id="Zurück19">
        <Link to={`/4-Freunde?friendProfileId=${friendProfileId}`}>4.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde5;
