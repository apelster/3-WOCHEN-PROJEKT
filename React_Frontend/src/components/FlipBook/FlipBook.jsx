import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../Profil/Profil-Design.css";
import "./Flipbook.css";

const Flipbook = () => {
  const [entries, setEntries] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const friendProfileId = searchParams.get("friendProfileId");

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(`http://3.70.29.185:3001/getAllAnswers/${friendProfileId}`);
        setEntries(response.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Einträge!", error);
      }
    };

    fetchEntries();
  }, [friendProfileId]);

  return (
    <main>
      <div>
        <img id="Book-Background" src="/img/book.png" alt="" />
        <h1 id="Headline">Flipbook Einträge</h1>
        <div id="entries-container">
          {entries.map((entry, index) => (
            <div key={index} className="entry">
              <p>{entry.question1}</p>
              <p>{entry.question2}</p>
              <p>{entry.question3}</p>
              <p>{entry.question4}</p>
              <p>{entry.question5}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Flipbook;
