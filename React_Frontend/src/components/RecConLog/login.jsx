import React, { useState } from 'react';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import '../Profil/Profil-Design.css';
import { Link } from 'react-router-dom';const poolData = {
  UserPoolId: 'eu-central-1_7lxpfCbZ1',
  ClientId: '3ps9g5oni6i3d2p087gv5h5m1s'
};const userPool = new CognitoUserPool(poolData);const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };  const handleSubmit = (e) => {
    e.preventDefault();    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });    const userData = {
      Username: email,
      Pool: userPool,
    };    const cognitoUser = new CognitoUser(userData);    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('Login successful:', result);
        setMessage('Login successful!');
        // Handle successful login here, e.g., redirect to a protected route
      },
      onFailure: (err) => {
        console.error('Error logging in:', err);
        setMessage(`Error logging in: ${err.message}`);
      },
    });
  };  return (
    <main className="main-content">
      <div className='container'>
        <img className='feder' src="/img/feder.png" alt="Feder" />
      </div>      <div className="register-container">
        <img className='Book-Background' src="/img/book.png" alt="Book Background"/>
        <h1 className='Headline'>Login</h1>        <form className='register-form' onSubmit={handleSubmit}>
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
          </label>          <label htmlFor="password">
            Passwort:
            <input
              className='input-field'
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </label>          <button type="submit" className="register-button">Login</button>
        </form>        {message && <p className="message">{message}</p>}
      </div>      <button id="Zurück">
        <Link to="/register">Zurück</Link>
      </button>
    </main>
  );
};export default Login;