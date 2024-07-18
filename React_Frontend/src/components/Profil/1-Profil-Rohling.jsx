import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Profil/Profil-Design.css";

const Profil1 = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [profileToken, setProfileToken] = useState("");

  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://3.70.29.185:3001/saveProfile",
        {
          name,
          city,
          phone,
          birthday,
          description,
        },
        {
          timeout: 10000,
        }
      );
      alert('Profil erfolgreich gespeichert!');
      setProfileToken(response.data.profileToken);
      navigate(`/0-Freunde?token=${response.data.profileToken}`); // Redirect to /0-Freunde with the token
    } catch (error) {
      console.error("Fehler beim Speichern des Profils!", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p1">
      <img id="bookProfil" src="/img/book.png" alt="book" />

      <div className="left-page">
        <div className="image-placeholder">
          {image ? null : (
            <label id="file2" htmlFor="file">
              Bild einfügen
            </label>
          )}
          <input
            type="file"
            id="file"
            name="picture"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
          {image && (
            <img
              src={image}
              alt="img"
              id="profile-picture"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
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
            className="input2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          .
        </p>

        <p className="pProfil3">
          Meine Telefonnummer ist
          <input
            type="text"
            className="input3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          .
        </p>

        <p className="pProfil4">
          Ich habe Geburtstag am
          <input
            type="date"
            className="input4"
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

        <button id="savingdescription" onClick={handleSubmit}>
          Speichern
        </button>
      </div>
      <img id="federProfil" src="/img/feder.png" alt="feder" />
    </div>
  );
};

export default Profil1;
