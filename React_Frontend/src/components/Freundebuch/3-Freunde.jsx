import React, { useState } from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-3.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Freunde3 = () => {
  const [answers, setAnswers] = useState({ Answer6: "", Answer7: "", Answer8: "", Answer9: "", Answer10: "" });
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

  const handleSubmit = async (nextPage) => {
    try {
      await axios.post("http://3.70.29.185:3001/saveAnswers", {
        friendProfileId,
        answers: [answers.Answer6, answers.Answer7, answers.Answer8, answers.Answer9, answers.Answer10],
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
        <img id="Book-Background15" src="/img/book.png" alt="" />
        <h1 id="Headline15">Beantworte kurz ein paar Fragen</h1>
        <ul>
          <li id="liste15">
            <label htmlFor="question1">
              <p id="paragraph36">Wenn du eine Erfindung der Vergangenheit rückgängig machen könntest, welche wäre es?</p>
              <input id="input36" type="text" name="Answer6" onChange={handleChange} />
            </label>
          </li>
          <li id="liste15">
            <label htmlFor="question2">
              <p id="paragraph37">Was ist das merkwürdigste Ritual, das du <br /> vor Prüfungen hast?</p>
              <input id="input37" type="text" name="Answer7" onChange={handleChange} />
            </label>
          </li>
          <li id="liste15">
            <label htmlFor="question3">
              <p id="paragraph38">Wenn du in einem Märchen leben könntest, <br /> welches wäre es und warum?</p>
              <input id="input38" type="text" name="Answer8" onChange={handleChange} />
            </label>
          </li>
          <li id="liste15">
            <label htmlFor="question4">
              <p id="paragraph39">Was ist das Lustigste, was du je <br /> bei einer Familienfeier erlebt hast?</p>
              <input id="input39" type="text" name="Answer9" onChange={handleChange} />
            </label>
          </li>
          <li id="liste15">
            <label htmlFor="question5">
              <p id="paragraph40">Wenn du ein Lied schreiben müsstest, <br /> wovon würde es handeln?</p>
              <input id="input40" type="text" name="Answer10" onChange={handleChange} />
            </label>
          </li>
        </ul>
      </div>
      <button id="Freunde15" onClick={() => handleSubmit(`/4-Freunde?friendProfileId=${friendProfileId}`)}>
        4.Seite
      </button>
      <button id="Zurück15">
        <Link to={`/2-Freunde?friendProfileId=${friendProfileId}`}>2.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde3;
