import React, { useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-2.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Freunde2 = () => {
  const [answers, setAnswers] = useState({
    Answer1: "",
    Answer2: "",
    Answer3: "",
    Answer4: "",
    Answer5: ""
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
        question1: answers.Answer1,
        question2: answers.Answer2,
        question3: answers.Answer3,
        question4: answers.Answer4,
        question5: answers.Answer5,
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
        <img id="Book-Background13" src="/img/book.png" alt="" />
        <h1 id="Headline13">Beantworte kurz ein paar Fragen</h1>
        <ul>
          <li id="liste13">
            <label htmlFor="Answer1">
              <p id="paragraph31">
                Großes Abenteuer oder <br /> kleine Freuden im Alltag?
                <input id="radio1" type="radio" name="Answer1" value="Großes Abenteuer" onChange={handleChange} />
                <input id="radio2" type="radio" name="Answer1" value="kleine Freuden" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste13">
            <label htmlFor="Answer2">
              <p id="paragraph32">
                Arbeit im Büro oder Home-Office?
                <input id="radio3" type="radio" name="Answer2" value="Arbeit im Büro" onChange={handleChange} />
                <input id="radio4" type="radio" name="Answer2" value="Home-Office" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste13">
            <label htmlFor="Answer3">
              <p id="paragraph33">
                Actionreiches Videospiel oder <br /> Puzzle-Spiel?
                <input id="radio5" type="radio" name="Answer3" value="Actionreiches Videospiel" onChange={handleChange} />
                <input id="radio6" type="radio" name="Answer3" value="Puzzle-Spiel" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste13">
            <label htmlFor="Answer4">
              <p id="paragraph34">
                Frische Blumen oder künstliche Pflanzen?
                <input id="radio7" type="radio" name="Answer4" value="Frische Blumen" onChange={handleChange} />
                <input id="radio8" type="radio" name="Answer4" value="künstliche Pflanzen" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste13">
            <label htmlFor="Answer5">
              <p id="paragraph35">
                Popcorn oder Nachos im Kino?
                <input id="radio9" type="radio" name="Answer5" value="Popcorn" onChange={handleChange} />
                <input id="radio10" type="radio" name="Answer5" value="Nachos" onChange={handleChange} />
              </p>
            </label>
          </li>
        </ul>
      </div>
      <button id="Freunde13" onClick={() => handleSubmit(`/3-Freunde?friendProfileId=${friendProfileId}`)}>
        3.Seite
      </button>
      <button id="Zurück13">
        <Link to={`/1-Freunde?friendProfileId=${friendProfileId}`}>1.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde2;
