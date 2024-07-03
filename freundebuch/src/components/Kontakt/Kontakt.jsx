import React, { useState } from 'react';
import './Kontakt.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Here you can handle the form submission, e.g., sending the data to a server
  };

  return (
    <div className="container">
      <h1>Kontakt</h1>
      <div id="content">
        <p>
          Wenn Sie Fragen zu unserem Unternehmen haben oder weitere Informationen benötigen, können Sie uns gerne kontaktieren:
        </p>
        <p>
          Teamforce One<br />
          Stefan Henke<br />
          Rheinstraße 40<br />
          47495 Rheinberg<br />
          Deutschland
        </p>
        <p>
          Telefon: 0178/8715208 <br />
          E-Mail: henke.stefan1985@gmail.com
        </p>
        <p>
          Alternativ können Sie auch das untenstehende Kontaktformular verwenden:
        </p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br />
          <label htmlFor="email">E-Mail:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <label htmlFor="message">Nachricht:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea><br />
          <input type="submit" value="Absenden" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
