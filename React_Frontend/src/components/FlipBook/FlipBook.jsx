import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../Profil/Profil-Design.css";
import "./FlipBook.css";

const Flipbook = () => {
  const [data, setData] = useState({ friendProfile: {}, answers: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const friendProfileId = searchParams.get("friendProfileId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://3.70.29.185:3001/getAllAnswers/${friendProfileId}`);
        console.log("API Response:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Einträge!", error);
        setError("Fehler beim Abrufen der Einträge!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [friendProfileId]);

  if (loading) {
    return <div>Laden...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data.friendProfile) {
    return <div>Freundesprofil nicht gefunden!</div>;
  }

  return (
    <main>
      <div>
        <img id="Book-Background" src="/img/book.png" alt="" />
        <h1 id="Headline">Flipbook Einträge</h1>
        <div id="entries-container">
          <div className="entry">
            <h2>Freundeprofil</h2>
            <p>Name: {data.friendProfile.name}</p>
            <p>Stadt: {data.friendProfile.city}</p>
            <p>Telefon: {data.friendProfile.phone}</p>
            <p>Geburtstag: {data.friendProfile.birthday}</p>
            <p>Beschreibung: {data.friendProfile.description}</p>
          </div>
          {data.answers.map((entry, index) => (
            <div key={index} className="entry">
              <h2>Fragen und Antworten Seite {index + 1}</h2>
              <p>Frage 1: {entry.question1}</p>
              <p>Frage 2: {entry.question2}</p>
              <p>Frage 3: {entry.question3}</p>
              <p>Frage 4: {entry.question4}</p>
              <p>Frage 5: {entry.question5}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Flipbook;
