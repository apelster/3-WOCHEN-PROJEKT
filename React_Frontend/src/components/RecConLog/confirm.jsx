import React, { useState } from "react";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import "./RegConLog.css";
import { useNavigate } from "react-router-dom";
const poolData = {
  UserPoolId: "eu-central-1_7lxpfCbZ1",
  ClientId: "3ps9g5oni6i3d2p087gv5h5m1s",
};
const userPool = new CognitoUserPool(poolData);
const Confirm = () => {
  const [form, setForm] = useState({
    username: "",
    confirmationCode: "",
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, confirmationCode } = form;
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        console.error("Error confirming registration:", err);
        setMessage(`Error: ${err.message}`);
        return;
      }
      console.log("Confirmation successful:", result);
      setMessage("Bestätigung erfolgreich! Sie werden zur Login-Seite weitergeleitet...");
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Leitet nach 2 Sekunden zur Login-Seite weiter
    });
  };
  return (
    <main className="main-content1">
      <div>
        <img className="Book-Background1" src="/img/book.png" alt="Book Background" />
        <img className="feder1" src="/img/feder.png" alt="Feder" />
      </div>
      <div className="register-container">
        <h1 className="Headline1">Bestätigen</h1>
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
          <label htmlFor="confirmationCode">
            Bestätigungscode:
            <input
              className="input-field"
              type="text"
              id="confirmationCode"
              name="confirmationCode"
              value={form.confirmationCode}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="register-button">
            Bestätigen
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </main>
  );
};
export default Confirm;