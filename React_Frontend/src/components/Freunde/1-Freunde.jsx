import React from "react";
import "../Profil/Profil-Design.css";
import "../Freunde/Freunde-1.css";
import { Link } from "react-router-dom";

const Freunde1 = () => {
  return (
    <main className="main-content">
      <div className="container">
        <img className="feder" src="/img/feder.png" alt="" />
      </div>

      <div>
        <img className="Book-Background" src="/img/book.png" alt="" />

        <img
          id="Familienfoto"
          src="/img/Familienfoto-removebg-preview.png"
          alt="Familienfoto"
        />

        <button id="Freunde">
          <Link to="/2-Freunde">2.Seite</Link>
        </button>
      </div>
    </main>
  );
};

export default Freunde1;
