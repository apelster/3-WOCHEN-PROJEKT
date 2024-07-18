import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import "../Profil/Profil-Design.css";
import "./Freunde-1.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Freunde1 = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [friendProfileId, setFriendProfileId] = useState(null);

  const query = useQuery();
  const userProfileToken = query.get("token");
  const navigate = useNavigate();

  const handleSubmitProfile = async () => {
    try {
      const response = await axios.post(
        "http://3.70.29.185:3001/saveFriendProfile",
        {
          name,
          city,
          phone,
          birthday,
          description,
          userProfileToken,
        },
        {
          timeout: 10000,
        }
      );
      alert("Friend profile saved successfully!");
      setFriendProfileId(response.data.friendProfileId);
    } catch (error) {
      console.error("There was an error saving the friend's profile!", error);
    }
  };

  const handleSubmitAnswers = async () => {
    if (!friendProfileId) {
      alert("Please save the profile first!");
      return;
    }

    try {
      const response = await axios.post(
        "http://3.70.29.185:3001/saveAnswers",
        {
          question1,
          question2,
          question3,
          question4,
          question5,
          friendProfileId,
        },
        {
          timeout: 10000,
        }
      );
      alert("Answers saved successfully!");
      navigate(`/2-Freunde?friendProfileId=${friendProfileId}`);
    } catch (error) {
      console.error("There was an error saving the answers!", error);
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

      <button id="Freunde11" onClick={handleSubmitAnswers}>
        Profil Speichern
      </button>


    </main>
  );
};

export default Freunde1;
