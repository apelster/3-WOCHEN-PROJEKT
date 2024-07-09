import React, { useState } from "react";
import { CognitoUserPool, CognitoUserAttribute } from "amazon-cognito-identity-js";
import "./RegConLog.css";
import { useNavigate } from "react-router-dom";
const poolData = {
  UserPoolId: "eu-central-1_7lxpfCbZ1", // Your user pool id here
  ClientId: "3ps9g5oni6i3d2p087gv5h5m1s", // Your app client id here
};
const userPool = new CognitoUserPool(poolData);
const Register = () => {
  const [form, setForm] = useState({
    username: "",
    name: "",
    family_name: "",
    email: "",
    birthdate: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, name, family_name, email, birthdate, address, password } = form;
    const attributeList = [
      new CognitoUserAttribute({ Name: "name", Value: name }),
      new CognitoUserAttribute({ Name: "family_name", Value: family_name }),
      new CognitoUserAttribute({ Name: "email", Value: email }),
      new CognitoUserAttribute({ Name: "birthdate", Value: birthdate }),
      new CognitoUserAttribute({ Name: "address", Value: address }),
    ];
    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        console.error("Error signing up:", err);
        setMessage(`Error: ${err.message}`);
        return;
      }
      console.log("Sign up successful:", result);
      setMessage("Registrierung erfolgreich! Sie werden zur Bestätigungsseite weitergeleitet...");
      setTimeout(() => {
        navigate("/confirm");
      }, 2000); // Leitet nach 2 Sekunden zur Bestätigungsseite weiter
    });
  };
  return (
    <main className="main-content1">
      <div>
        <img className="Book-Background1" src="/img/book.png" alt="Book Background" />
        <img className="feder1" src="/img/feder.png" alt="Feder" />
      </div>
      <div className="register-container">
        <h1 className="Headline1">Registrieren</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="username">
            Benutzername:
            <input
              className="input-field"
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="name">
            Vorname:
            <input
              className="input-field"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="family_name">
            Nachname:
            <input
              className="input-field"
              type="text"
              id="family_name"
              name="family_name"
              value={form.family_name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email">
            E-Mail:
            <input
              className="input-field"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="birthdate">
            Geburtsdatum:
            <input
              className="input-field"
              type="date"
              id="birthdate"
              name="birthdate"
              value={form.birthdate}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="address">
            Adresse:
            <input
              className="input-field"
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="password">
            Passwort:
            <input
              className="input-field"
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="register-button">
            Registrieren
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </main>
  );
};
export default Register;