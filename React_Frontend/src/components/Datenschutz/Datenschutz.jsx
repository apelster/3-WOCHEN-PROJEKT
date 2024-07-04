import React from 'react';
import './Datenschutz.css';
import { Link } from 'react-router-dom';

const Datenschutz = () => {
  return (
    
    <div className="containerD">
      
      <h1 id='h1D'>Datenschutz</h1>

      <div id="content">

        <p className='pD'>
          Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
        </p>

        <p className='pD'>
          Teamforce One<br />
          Max Mustermann<br />
          Rheinstraße 40<br />
          08157 Kaufland<br />
          Deutschland
        </p>

        <p className='pD'>
          Ihre Betroffenenrechte<br />
          Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
        </p>

        <ul className='ulD'>
          <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,</li>
          <li>Berichtigung unrichtiger personenbezogener Daten,</li>
          <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
          <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,</li>
          <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
          <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.</li>
        </ul>

        <p className='pD'>
          Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>


        <li className='pD'>
        Weitere Informationen finden Sie in unserer vollständigen : <span></span> 
        <Link to="/Datenschutzerklärung">Datenschutzerklärung</Link>.
        </li>
      </div>
    </div>
  );
};

export default Datenschutz;
