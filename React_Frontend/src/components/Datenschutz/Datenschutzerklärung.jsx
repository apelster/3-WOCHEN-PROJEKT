import React from "react";
import "./Datenschutzerklärung.css";

const Datenschutzerklärung = () => {
  return (
    <div class="containerDE">
      <div id="content">
        <div id="Allg">
          <h2 className="h2DEA">1. Allgemeine Hinweise</h2>

          <p className="pDEA">
            Der Schutz Ihrer persönlichen Daten ist <br />uns sehr wichtig. In dieser
            Datenschutz- <br />erklärung informieren wir Sie über die <br /> wichtigsten
            Aspekte der Datenverarbeitung <br /> im Rahmen unserer Website.
            <br /> Verantwortliche Stelle im Sinne der Datenschutz- <br />gesetze, insbesondere
            der EU-Datenschutzgrund- <br />verordnung (DSGVO), ist: <span></span>
            <strong><u>Teamforce One Deutschland</u></strong>

          </p>

        </div>

        {/* -------------------------- */}
        <div id="ZugD">
          <h2>2. Zugriffsdaten</h2>

          <p className="pDE1">
            Wir, der Websitebetreiber bzw. Seitenprovider, <br />
            erheben aufgrund unseres berechtigten Interesses <br />
            (s. Art. 6 Abs. 1 lit. f. DSGVO) Daten über Zugriffe auf <br />
            die Website und speichern diese als „Server-Logfiles“ <br />
            auf dem Server der Website ab. Folgende Daten werden <br /> so
            protokolliert:
          </p>

          <ul className="ulDE1">
            <li>Besuchte Website</li>
            <li>Uhrzeit zum Zeitpunkt des Zugriffes</li>
            <li>Menge der gesendeten Daten in Byte</li>
            <li>Quelle/Verweis, von welchem Sie auf <br /> die Seite gelangten</li>
            <li>Verwendeter Browser</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Verwendete IP-Adresse</li>
          </ul>

          <p className="pDE1">
            Die Server-Logfiles werden für maximal 7 Tage gespeichert <br /> und
            anschließend gelöscht. Die Speicherung der Daten erfolgt <br />
            aus Sicherheitsgründen, um z. B. Missbrauchsfälle aufklären zu
            <br /> können. Müssen Daten aus Beweisgründen aufgehoben werden,{" "}
            <br /> sind sie solange von der Löschung ausgenommen bis der Vorfall{" "}
            <br />
            endgültig geklärt ist.
          </p>
        </div>

        {/* ----------------------- */}

        <div id="Umgang">
          <h2 className="h2DE2">
            3. Umgang mit <br />
            personenbezogenen Daten
          </h2>

          <p className="pDE">
            Der Websitebetreiber erhebt, nutzt <br />und gibt 
            Ihre personenbezogenen  <br />Daten nur dann weiter,
            wenn dies <br />im gesetzlichen Rahmen erlaubt <br />ist 
            oder Sie in die Datenerhebung <br />einwilligen. Zu den
            personen- <br />bezogenen Daten gehören:
          </p>

          <ul className="ulDE2">
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Bilder</li>
          </ul>
        </div>

        {/* ------------------------------- */}

        <div id="Rechte">
          <h2 className="h2DE">4. Rechte des Nutzers</h2>

          <p className="pDE">
            Sie haben als Nutzer das Recht, auf Antrag <br /> eine kostenlose Auskunft
            darüber zu erhalten,<br /> welche personenbezogenen Daten über Sie
            <br />gespeichert wurden. Sie haben außerdem das<br /> Recht auf Berichtigung
            falscher Daten und auf<br /> die Verarbeitungseinschränkung oder Löschung<br />
            Ihrer personenbezogenen Daten. Falls zutreffend,<br /> können Sie auch Ihr
            Recht auf Datenportabilität <br />geltend machen. Sollten Sie annehmen,
            dass <br />Ihre Daten unrechtmäßig verarbeitet wurden,<br /> können Sie eine
            Beschwerde bei der zuständigen<br /> Aufsichtsbehörde einreichen.
          </p>
        </div>

        {/* -------------------------------- */}

        <div id="Widerspruch">
          <h2 className="h2DE">5. Widerspruchsrecht</h2>

          <p className="pDE">
            Nutzer dieser Webseite können von  <br />ihrem Widerspruchsrecht
            Gebrauch <br />machen und
            der Verarbeitung ihrer <br />personenbezogenen Daten zu jeder<br /> Zeit
            widersprechen.
          </p>
        </div>

        {/* -------------------------- */}

        <div id="Kontaktaufnahme">
          <h2 className="h2DE">6. Kontaktaufnahme</h2>

          <p className="pDE">
            Wenn Sie uns per Kontaktformular Anfragen <br />zukommen lassen, werden
            Ihre Angaben <br />aus dem Anfrageformular inklusive der von<br /> Ihnen dort
            angegebenen Kontaktdaten zwecks <br />Bearbeitung der Anfrage und für den
            Fall <br />von Anschlussfragen bei uns gespeichert.<br /> Diese Daten geben wir
            nicht ohne Ihre<br /> Einwilligung weiter.
          </p>
        </div>

        {/* ------------------------------ */}

        <div id="Speicherung">
          <h2 className="h2DE">7. Speicherung von Bildern</h2>

          <p className="pDE">
            Wenn Sie uns Bilder zur Verfügung stellen, <br />speichern wir diese auf
            unseren Servern. <br />Diese Speicherung erfolgt nur mit Ihrer
            <br />ausdrücklichen Einwilligung. Sie haben<br /> das Recht, diese Einwilligung
            jederzeit<br /> zu widerrufen.
          </p>
        </div>

        {/* ------------------------- */}

        <div id="Änderungen">
          <h2 className="h2DE">8. Änderungen der Datenschutzerklärung</h2>
          <p className="pDE">
            Wir behalten uns vor, die Datenschutzerklärung anzupassen,<br /> um sie
            stets den aktuellen rechtlichen Anforderungen<br /> anzupassen oder um
            Änderungen unserer Leistungen<br /> in der Datenschutzerklärung
            umzusetzen, z. B. bei<br /> der Einführung neuer Services. Für Ihren
            erneuten<br /> Besuch gilt dann die neue Datenschutzerklärung.
          </p>
          </div>

          {/* -------------------------------- */}

          <div id="Löschung">
            <h2 className="h2DE">9. Löschung von Daten</h2>

            <p className="pDE">
              Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht <br />zur
              Aufbewahrung von Daten (z. B. Vorratsdatenspeicherung) <br />kollidiert,
              haben Sie ein Anrecht auf Löschung Ihrer Daten.<br /> Von uns
              gespeicherte Daten werden, sollten sie für ihre Zweck-<br /> bestimmung
              nicht mehr vonnöten sein und es keine gesetzlichen<br />
              Aufbewahrungsfristen geben, gelöscht. Falls eine Löschung nicht<br />
              durchgeführt werden kann, da die Daten für zulässige gesetzliche<br />
              Zwecke erforderlich sind, erfolgt eine Einschränkung der
              <br />Datenverarbeitung. In diesem Fall werden die Daten gesperrt und<br />
              nicht für andere Zwecke verarbeitet.
            </p>
          </div>
        </div>
      </div>
  );
};

export default Datenschutzerklärung;
