import React, { useState } from "react";
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import "./RegConLog.css";
import { useNavigate } from "react-router-dom";
const poolData = {
  UserPoolId: "eu-central-1_7lxpfCbZ1",
  ClientId: "3ps9g5oni6i3d2p087gv5h5m1s",
};
const userPool = new CognitoUserPool(poolData);
const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [forgotForm, setForgotForm] = useState({
    email: "",
  });
  const [changeForm, setChangeForm] = useState({
    email: "",
    confirmationCode: "",
    newPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleForgotChange = (e) => {
    const { name, value } = e.target;
    setForgotForm({ ...forgotForm, [name]: value });
  };
  const handleChangePasswordChange = (e) => {
    const { name, value } = e.target;
    setChangeForm({ ...changeForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log("Login successful:", result);
        setMessage("Login erfolgreich! Sie werden zur Startseite weitergeleitet...");
        setTimeout(() => {
          navigate("/home");
        }, 2000); // Leitet nach 2 Sekunden zur gewünschten Seite weiter
      },
      onFailure: (err) => {
        console.error("Error logging in:", err);
        setMessage(`Error: ${err.message}`);
      },
    });
  };
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const { email } = forgotForm;
    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.forgotPassword({
      onSuccess: (data) => {
        console.log("Code sent:", data);
        setMessage("Bestätigungscode gesendet! Bitte überprüfen Sie Ihre E-Mails.");
        setForgotPassword(false);
        setChangePassword(true);
      },
      onFailure: (err) => {
        console.error("Error:", err);
        setMessage(`Error: ${err.message}`);
      },
    });
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    const { email, confirmationCode, newPassword } = changeForm;
    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmPassword(confirmationCode, newPassword, {
      onSuccess: (data) => {
        console.log("Password changed successfully:", data);
        setMessage("Passwort erfolgreich geändert! Sie können sich jetzt einloggen.");
        setChangePassword(false);
      },
      onFailure: (err) => {
        console.error("Error:", err);
        setMessage(`Error: ${err.message}`);
      },
    });
  };
  return (
    <main className="main-content1">
      <div>
        <img className="Book-Background1" src="/img/book.png" alt="Book Background" />
        <img className="feder1" src="/img/feder.png" alt="Feder" />
      </div>
      <div className="register-container1">
        <h1 className="Headline1">Login</h1>
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
            Login
          </button>
        </form>
        <button onClick={() => setForgotPassword(true)} className="register-button">
          Passwort vergessen
        </button>
        {message && <p className="message">{message}</p>}
      </div>
      {forgotPassword && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setForgotPassword(false)}>
              &times;
            </span>
            <h2>Passwort vergessen</h2>
            <form className="register-form" onSubmit={handleForgotPassword}>
              <label htmlFor="email">
                E-Mail:
                <input
                  className="input-field"
                  type="email"
                  id="email"
                  name="email"
                  value={forgotForm.email}
                  onChange={handleForgotChange}
                  required
                />
              </label>
              <button type="submit" className="register-button">
                Bestätigungscode senden
              </button>
            </form>
          </div>
        </div>
      )}
      {changePassword && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setChangePassword(false)}>
              &times;
            </span>
            <h2>Passwort ändern</h2>
            <form className="register-form" onSubmit={handleChangePassword}>
              <label htmlFor="email">
                E-Mail:
                <input
                  className="input-field"
                  type="email"
                  id="email"
                  name="email"
                  value={changeForm.email}
                  onChange={handleChangePasswordChange}
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
                  value={changeForm.confirmationCode}
                  onChange={handleChangePasswordChange}
                  required
                />
              </label>
              <label htmlFor="newPassword">
                Neues Passwort:
                <input
                  className="input-field"
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={changeForm.newPassword}
                  onChange={handleChangePasswordChange}
                  required
                />
              </label>
              <button type="submit" className="register-button">
                Passwort ändern
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};
export default Login;