import React, { useState } from "react";
import axios from "axios";
import "../Profil/Profil-Design.css";
import { Link } from "react-router-dom";

const Freunde = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // new state to store image URL

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileType = file.type;
    const allowedTypes = ['image/png', 'image/jpeg', 'image/gif']; // add more types as needed

    if (allowedTypes.includes(fileType)) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // update image state with the URL
      };
      reader.readAsDataURL(file);
    } else {
      alert('Only image files with.png,.jpg,.jpeg, or.gif extensions are allowed.');
    }
  };

  return (
    <div className="p1">
      <img id="bookProfil" src="/img/book.png" alt="book" />

      <div className="left-page">
        <div className="image-placeholder">
          {image? null : (
            <label id="file2" htmlFor="file">
              Bild einfügen
            </label>
          )}
          <input
            type="file"
            id="file"
            name="Image"
            accept=".png,.jpg,.jpeg,.gif" // only allow these file extensions
            onChange={handleImageChange}
          />
          {image && (
            <img
              src={image}
              alt="img"
              id="profile-picture"
              style={{
                width: "100%", // set width to 100% of the container
                height: "100%", // set height to 100% of the container
                objectFit: "cover", // ensure the image is resized to cover the entire area
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
          <Link to="/1-Freunde">Speichern</Link>
        </button>

        
      </div>
      <img id="federProfil" src="/img/feder.png" alt="feder" />
    </div>
  );
};

export default Freunde;