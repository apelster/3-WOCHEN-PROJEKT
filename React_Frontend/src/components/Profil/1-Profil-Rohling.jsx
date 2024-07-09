import React from "react";
import "./Profil-Design.css";
import { Link } from "react-router-dom";


const Profil1 = () => {
  return (
    <div className="container">
      <div className="book2">
        <div className="left-page">
          <div className="image-placeholder">
            <label id="file2" htmlFor="file">
              Bild einfügen
            </label>
            <input type="file" id="file" />
          </div>

          <div className="text-info">
            <p>
              Hallo! Mein Name ist <input type="text" className="input1" />.
            </p>
            <p>
              Ich wohne in <input type="text" className="input1" />.
            </p>
            <p>
              Meine Telefonnummer ist <input type="text" className="input1" />.
            </p>
            <p>
              Wir kennen uns durch?^
              <input type="text" className="input1" />.
            </p>
          </div>
        </div>

        <div className="right-page">
          <div className="book-page">
            <p className="angled-text">
              Meine Lieblingsfarbe ist{" "}
              <input type="text" className="custom-input" />.
            </p>
            <p className="angled-text">
              Mein Lieblingsessen ist{" "}
              <input type="text" className="custom-input" />.
            </p>
            <p className="angled-text">
              Mein Lieblingshobby ist{" "}
              <input type="text" className="custom-input" />.
            </p>
            <p className="angled-text">
              Mein Lieblingstier ist{" "}
              <input type="text" className="custom-input" />.
            </p>
            <p className="angled-text">
              Mein Lieblingsfilm ist{" "}
              <input type="text" className="custom-input" />.
            </p>
            <p className="angled-text">
              Mein Lieblingsbuch ist{" "}
              <input type="text" className="custom-input" />.
            </p>
            <p className="angled-text">
              Mein Traumberuf ist <input type="text" className="custom-input" />
              .
            </p>
          </div>
          
      <button id="firstPagebtn">
        <Link to="/2-Profil">Nächste Seite</Link>
      </button>
        </div>
      </div>

    </div>
  );
};
export default Profil1;
