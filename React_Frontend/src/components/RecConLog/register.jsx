import React, { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import "./RegConLog.css"
import { Link } from 'react-router-dom';const poolData = {
  UserPoolId: 'eu-central-1_7lxpfCbZ1',
  ClientId: '3ps9g5oni6i3d2p087gv5h5m1s'
};const userPool = new CognitoUserPool(poolData);const Register = () => {
  const [form, setForm] = useState({
    name: '',
    family_name: '',
    email: '',
    birthdate: '',
    address: '',
    password: ''
  });  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, family_name, email, birthdate, address, password } = form;    userPool.signUp(
      email,
      password,
      [
        { Name: 'name', Value: name },
        { Name: 'family_name', Value: family_name },
        { Name: 'birthdate', Value: birthdate },
        { Name: 'address', Value: address }
      ],
      null,
      (err, result) => {
        if (err) {
          console.error('Error signing up:', err);
          return;
        }
        console.log('Sign up successful:', result);
      }
    );
  };  return (
    <main className="main-content">
      <div className='container'>
        <img className='feder' src="/img/feder.png" alt="Feder" />
      </div>      <div className="register-container">
        <img className='Book-Background' src="/img/book.png" alt="Book Background"/>
        <h1 className='Headline'>Registrieren</h1>        <form className='register-form' onSubmit={handleSubmit}>
          <label htmlFor="name">
            Vorname:
            <input className='input-field' type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </label>          <label htmlFor="family_name">
            Nachname:
            <input className='input-field' type="text" id="family_name" name="family_name" value={form.family_name} onChange={handleChange} required />
          </label>          <label htmlFor="email">
            E-Mail:
            <input className='input-field' type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </label>          <label htmlFor="birthdate">
            Geburtsdatum:
            <input className='input-field' type="date" id="birthdate" name="birthdate" value={form.birthdate} onChange={handleChange} required />
          </label>          <label htmlFor="address">
            Adresse:
            <input className='input-field' type="text" id="address" name="address" value={form.address} onChange={handleChange} required />
          </label>          <label htmlFor="password">
            Passwort:
            <input className='input-field' type="password" id="password" name="password" value={form.password} onChange={handleChange} required />
          </label>          <button type="submit" className="register-button">Registrieren</button>
        </form>
      </div>      <button id="Zurück">
        <Link to="/8-Freunde">Zurück</Link>
      </button>
    </main>
  );
};export default Register;