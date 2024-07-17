import React, { useState } from "react";
import axios from "axios";
import "./Profil-Design.css";

const Profil1 = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://3.124.9.130:3001/saveProfile",
        {
          name,
          city,
          phone,
          birthday,
          description,
        },
        {
          timeout: 10000, // 10 seconds timeout
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("There was an error saving the profile!", error);
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
    <div className="p1">
      <img id="bookProfil" src="/img/book.png" alt="book" />

      <div className="left-page">
        <div className="image-placeholder">
          <label id="file2" htmlFor="file">
            Bild einfügen
          </label>
          <input type="file" id="file" />
        </div>

        <p className="pProfil1">
          Hallo! Mein Name ist
          <input
            type="text"
            className="input1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          .
        </p>

        <p className="pProfil2">
          Ich wohne in
          <input
            type="text"
            className="input1"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          .
        </p>

        <p className="pProfil3">
          Meine Telefonnummer ist
          <input
            type="text"
            className="input1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          .
        </p>

        <p className="pProfil4">
          Ich habe Geburtstag am
          <input
            type="date"
            className="input1"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          .
        </p>
      </div>

      <div id="rightPage">
        <h1 id="ÜberMich">Über Mich</h1>

        <textarea
          name="description"
          id="description"
          placeholder="Beschreibung"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>


      </div>
      <img id="federProfil" src="/img/feder.png" alt="feder" />
    </div>
  );
};

export default Profil1;
