import React, { useState } from "react";
import axios from "axios";
import "./Profil-Design.css";
import "./Freunde-1.css";
import { Link } from "react-router-dom";

const Freunde1 = () => {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://3.70.29.185:3001/saveAnswers",
        {
          question1,
          question2,
          question3,
          question4,
          question5,
        },
        {
          timeout: 10000, // 10 seconds timeout
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("There was an error saving the answers!", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <main>
      <div>
        <img id="Book-Background11" src="/img/book.png" alt="" />

        <h1 id="Headline11">Beantworte kurz ein paar Fragen</h1>

        <ul>
          <li id="liste11">
            <label htmlFor="question1">
              <p id="paragraph26">
                Welches ist dein Lieblings-TikTok-Trend?
                <input
                  id="input26"
                  type="text"
                  value={question1}
                  onChange={(e) => setQuestion1(e.target.value)}
                />
              </p>
            </label>
          </li>

          <li id="liste11">
            <label htmlFor="question2">
              <p id="paragraph27">
                Wenn du für einen Tag das Gegenteil deines Geschlechts
                sein könntest, was würdest du tun?
                <input
                  id="input27"
                  type="text"
                  value={question2}
                  onChange={(e) => setQuestion2(e.target.value)}
                />
              </p>
            </label>
          </li>

          <li id="liste11">
            <label htmlFor="question3">
              <p id="paragraph28">
                Was ist das lustigste Missgeschick, <br /> das dir in der Küche
                passiert ist?
                <input
                  id="input28"
                  type="text"
                  value={question3}
                  onChange={(e) => setQuestion3(e.target.value)}
                />
              </p>
            </label>
          </li>

          <li id="liste11">
            <label htmlFor="question4">
              <p id="paragraph29">
                Welcher Gegenstand aus deiner <br /> Kindheit fehlt dir am
                meisten?
                <input
                  id="input29"
                  type="text"
                  value={question4}
                  onChange={(e) => setQuestion4(e.target.value)}
                />
              </p>
            </label>
          </li>

          <li id="liste11">
            <label htmlFor="question5">
              <p id="paragraph30">
                Welches ist dein peinlichstes Foto?
                <input
                  id="input30"
                  type="text"
                  value={question5}
                  onChange={(e) => setQuestion5(e.target.value)}
                />
              </p>
            </label>
          </li>
        </ul>
      </div>

      <button id="savingAnswers" onClick={handleSubmit}>
        Speichern
      </button>

      <button id="Freunde11">
        <Link to="/2-Freunde">2.Seite</Link>
      </button>
    </main>
  );
};

export default Freunde1;
