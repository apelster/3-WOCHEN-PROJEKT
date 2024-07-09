import React, { useState } from 'react';
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import '../Profil/Profil-Design.css';
import { Link } from 'react-router-dom';const poolData = {
  UserPoolId: 'eu-central-1_7lxpfCbZ1',
  ClientId: '3ps9g5oni6i3d2p087gv5h5m1s'
};const userPool = new CognitoUserPool(poolData);const Confirm = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'code') setCode(value);
  };  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      Username: email,
      Pool: userPool
    };    const cognitoUser = new CognitoUser(userData);    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        setMessage(`Error confirming registration: ${err.message}`);
        return;
      }
      setMessage('Registration confirmed successfully!');
    });
  };  return (
    <main className="main-content">
      <div className='container'>
        <img className='feder' src="/img/feder.png" alt="Feder" />
      </div>      <div className="register-container">
        <img className='Book-Background' src="/img/book.png" alt="Book Background"/>
        <h1 className='Headline'>Bestätigung</h1>        <form className='register-form' onSubmit={handleSubmit}>
          <label htmlFor="email">
            E-Mail:
            <input
              className='input-field'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>          <label htmlFor="code">
            Bestätigungscode:
            <input
              className='input-field'
              type="text"
              id="code"
              name="code"
              value={code}
              onChange={handleChange}
              required
            />
          </label>          <button type="submit" className="register-button">Bestätigen</button>
        </form>        {message && <p className="message">{message}</p>}
      </div>      <button id="Zurück">
        <Link to="/register">Zurück</Link>
      </button>
    </main>
  );
};export default Confirm;