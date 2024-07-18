import React, { useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-4.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Freunde4 = () => {
  const [answers, setAnswers] = useState({ Answer11: "", Answer12: "", Answer13: "", Answer14: "", Answer15: "" });
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
        answers: [answers.Answer11, answers.Answer12, answers.Answer13, answers.Answer14, answers.Answer15],
      });
      alert("Answers saved successfully");
      navigate(`/5-Freunde?friendProfileId=${friendProfileId}`);
    } catch (error) {
      console.error("There was an error saving the answers!", error);
    }
  };

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
                <input id="radio11" type="radio" name="Answer11" value="Teezeit" onChange={handleChange} />
                <input id="radio12" type="radio" name="Answer11" value="Kaffeepause" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste17">
            <label htmlFor="question2">
              <p id="paragraph42">
                Joggen oder Yoga?
                <input id="radio13" type="radio" name="Answer12" value="Joggen" onChange={handleChange} />
                <input id="radio14" type="radio" name="Answer12" value="Yoga" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste17">
            <label htmlFor="question3">
              <p id="paragraph43">
                Konzerte im kleinen Club oder <br /> große Arena?
                <input id="radio15" type="radio" name="Answer13" value="Konzerte im kleinen Club" onChange={handleChange} />
                <input id="radio16" type="radio" name="Answer13" value="große Arena" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste17">
            <label htmlFor="question4">
              <p id="paragraph44">
                Neues ausprobieren oder  <br />Bewährtes genießen?
                <input id="radio17" type="radio" name="Answer14" value="Neues ausprobieren" onChange={handleChange} />
                <input id="radio18" type="radio" name="Answer14" value="Bewährtes genießen" onChange={handleChange} />
              </p>
            </label>
          </li>
          <li id="liste17">
            <label htmlFor="question5">
              <p id="paragraph45">
                Geduldig oder ungeduldig?
                <input id="radio19" type="radio" name="Answer15" value="Geduldig" onChange={handleChange} />
                <input id="radio20" type="radio" name="Answer15" value="ungeduldig" onChange={handleChange} />
              </p>
            </label>
          </li>
        </ul>
      </div>
      <button id="Freunde17" onClick={handleSubmit}>
        5.Seite
      </button>
      <button id="Zurück17">
        <Link to={`/3-Freunde?friendProfileId=${friendProfileId}`}>3.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde4;
