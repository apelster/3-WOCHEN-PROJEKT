import React from 'react';
import './Datenschutz.css';

const Datenschutz = () => {
  return (
    <div className="container">
      <h1>Datenschutzerklärung</h1>
      <div id="content">
        <p>
          Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
        </p>
        <p>
          Teamforce One<br />
          Stefan Henke<br />
          Rheinstraße 40<br />
          47495 Rheinberg<br />
          Deutschland
        </p>
        <p>
          Ihre Betroffenenrechte<br />
          Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
        </p>
        <ul>
          <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,</li>
          <li>Berichtigung unrichtiger personenbezogener Daten,</li>
          <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
          <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,</li>
          <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
          <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.</li>
        </ul>
        <p>
          Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
        <p>
          Weitere Informationen finden Sie in unserer vollständigen <a href="#">Datenschutzerklärung</a>.
        </p>
      </div>
    </div>
  );
};

export default Datenschutz;
