import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="browndiv">
      <img id="Brownbook" src="/img/BraunesBuch.png" alt="Book" />
      <h1 id="h1Home">Freundebuch</h1>
      
      <button id="LoginHome">
        <Link to="/login">Login</Link>
      </button>
      
      <button id="RegistrierungHome">
        <Link to="/register">Registrierung</Link>
      </button>
      
      <button id="LinkHome">
        Link einfügen
      </button>

      <img id="federhome" src="/img/feder.png" alt="feder" />
    </div>
  );
};

export default Home;
