import React from "react";

const Profil1 = () => {
  return (
    <div className="book2">
      <img id="bookProfil" src="/img/book.png" alt="book" />

      <div className="left-page">
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
          Ich habe Geburtstag am ?
          <input type="text" className="input1" />.
        </p>
      </div>



      <div id="rightPage">
        <h1 id="ÜberMich">Über Mich</h1>

        <form action=""> <textarea name="description" id="description" placeholder="Beschreibung"></textarea></form>

        <button id="savingdescription">Speichern</button>
      </div>


      <div className="image-placeholder">
        <label id="file2" htmlFor="file">
          Bild einfügen
        </label>
        <input type="file" id="file" />
      </div>

      <img id="harrypotter" src="/img/feder.png" alt="feder" />

    </div>
  );
};
export default Profil1;
