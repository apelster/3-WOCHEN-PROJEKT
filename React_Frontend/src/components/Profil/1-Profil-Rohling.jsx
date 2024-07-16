import React from "react";
import "./Profil-Design.css";

const Profil1 = () => {

  return (
    <>

    <div className="p1">
      <img id="bookProfil" src="/img/book.png" alt="book" />
      
      
      <div className="left-page">
        <div className="image-placeholder">
          <label id="file2" htmlFor="file">
            Bild einfügen
          </label>
          <input type="image" id="file" />
        </div>

        <p className="pProfil1">
          Hallo! Mein Name ist <input type="text" className="input1" />.
        </p>

        <p className="pProfil2">
          Ich wohne in <input type="text" className="input1" />.
        </p>

        <p className="pProfil3">
          Meine Telefonnummer ist <input type="text" className="input1" />.
        </p>

        <p className="pProfil4">
          Ich habe Geburtstag am ?
          <input type="text" className="input1" />.
        </p>
      </div>

      <div id="rightPage">
        <h1 id="ÜberMich">Über Mich</h1>

        <form action="">
          <textarea
            name="description"
            id="description"
            placeholder="Beschreibung"
          ></textarea>
        </form>

        <button id="savingdescription">Speichern</button>

        </div>
        <img id="federProfil" src="/img/feder.png" alt="feder" />
      </div>
    </>
  );
};
export default Profil1;
