import React, { useState } from "react";
import "./Kontakt.css";
import absendenImage from "./absendenImage.png"; // Make sure this path is correct
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };
  return (
    <div className="containerK">
      <div id="text-section">
        <h1 id="h1K">Kontakt</h1>
        <div id="p-position">
          <p className="pK">
            Wenn Sie Fragen zu unserem Unternehmen haben oder weitere
            Informationen benötigen,
            <br /> können Sie uns gerne kontaktieren:
          </p>
          <p className="pK">
            Teamforce One
            <br />
            Max Mustermann
            <br />
            Rheinstraße 40
            <br />
            08157 Kaufland
            <br />
            Deutschland
          </p>
          <p className="pK">
            Telefon: 1234/56789 <br />
            E-Mail: Max.Mustermann1785@gmail.com
          </p>
        </div>
      </div>
      <div id="form-section">
        <form id="contact-form" onSubmit={handleSubmit}>
          <p className="alternativ-text">Alternativ können Sie auch das Kontaktformular verwenden:</p>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            className="inputK"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="email">E-Mail:</label>
          <br />
          <input
            className="inputK"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="message">Nachricht:</label>
          <br />
          <textarea
            id="textareaK"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <br />
          <button type="submit" className="submit-button">
            <img src={absendenImage} alt="Absenden" className="submit-image" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;