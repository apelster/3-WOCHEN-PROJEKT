import React, { useState } from "react";
import axios from "axios";
import "./Profil-Design.css";

const Profil1 = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/saveProfile", {
        name,
        city,
        phone,
        birthday,
        description,
      })
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.error("There was an error saving the profile!", error);
      });
  };

  return (
    <div className="book2">
      <img id="bookProfil" src="/img/book.png" alt="book" />

      <div className="left-page">
        <div className="image-placeholder">
          <label id="file2" htmlFor="file">
            Bild einfügen
          </label>
          <input type="file" id="file" />
        </div>

        <p className="pProfil">
          Hallo! Mein Name ist <input type="text" className="input1" value={name} onChange={(e) => setName(e.target.value)} />.
        </p>

        <p className="pProfil">
          Ich wohne in <input type="text" className="input1" value={city} onChange={(e) => setCity(e.target.value)} />.
        </p>

        <p className="pProfil">
          Meine Telefonnummer ist <input type="text" className="input1" value={phone} onChange={(e) => setPhone(e.target.value)} />.
        </p>

        <p className="pProfil">
          Ich habe Geburtstag am <input type="text" className="input1" value={birthday} onChange={(e) => setBirthday(e.target.value)} />.
        </p>
      </div>

      <div id="rightPage">
        <h1 id="ÜberMich">Über Mich</h1>

        <form action="">
          <textarea
            name="description"
            id="description"
            placeholder="Beschreibung"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </form>

        <button id="savingdescription" onClick={handleSubmit}>Speichern</button>

        <img id="federProfil" src="/img/feder.png" alt="feder" />
      </div>
    </div>
  );
};
export default Profil1;
