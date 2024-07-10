import React from "react";
import "../Profil/Profil-Design.css";
import "./Freunde-1.css";

import { Link } from "react-router-dom";

const Freunde1 = () => {
  return (

    <div id="frdiv">
      <img id="frbook" src="/img/book.png" alt="book" />
    
      <button id="Freunde">
        <Link to="/2-Freunde">2.Seite</Link>
      </button>
    </div>
  );
};
export default Freunde1;
