import React, { useEffect, useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './FlipBook.css';
import '../Profil/Profil-Design.css';
import { Link, useLocation } from "react-router-dom";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {props.children}
    </div>
  );
});

function DemoBook() {
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");
  const [fragen, setFragen] = useState([]);
  const [antworten, setAntworten] = useState([]);
  const book = useRef();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const friendProfileId = searchParams.get("friendProfileId");

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });

    // Fetch profile information
    fetch(`http://localhost:3001/getProfileWithFriends/${friendProfileId}`)
      .then(response => response.json())
      .then(data => {
        setName(data.userProfile.name);
        setCity(data.userProfile.city);
        setPhone(data.userProfile.phone);
        setBirthday(data.userProfile.birthday);
        setDescription(data.userProfile.description);
      })
      .catch(error => console.error('Error fetching profile information:', error));

    // Fetch questions and answers
    fetch('http://localhost:3001/fragen')
      .then(response => response.json())
      .then(data => setFragen(data))
      .catch(error => console.error('Error fetching questions:', error));

    fetch(`http://localhost:3001/antworten/${friendProfileId}`)
      .then(response => response.json())
      .then(data => setAntworten(data))
      .catch(error => console.error('Error fetching answers:', error));
  }, [friendProfileId]);

  const handleSaveAnswers = () => {
    const answersToSave = fragen.map((frage, index) => ({
      frage: frage.frage,
      antwort: antworten[index]?.antwort || ''
    }));

    fetch('http://localhost:3001/antworten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ profil_id: friendProfileId, antworten: answersToSave })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Antworten erfolgreich gespeichert:', data);
      })
      .catch(error => {
        console.error('Error saving answers:', error);
      });
  };

  return (
    <>
      <HTMLFlipBook
        width={400}
        height={500}
        size="stretch"
        drawShadow={false}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={1}
        showCover={false}
        mobileScrollSupport={true}
        swipeDistance={30}
        clickEventForward={true}
        useMouseEvents={true}
        renderOnlyPageLengthChange={false}
        ref={book}
        className="flipbook"
      >
        <Page>
          <h1>Profil Informationen</h1>
          <p>Name: {name}</p>
          <p>Stadt: {city}</p>
          <p>Telefon: {phone}</p>
          <p>Geburtstag: {birthday}</p>
          <p>Beschreibung: {description}</p>
        </Page>

        {fragen.map((frage, index) => (
          <Page key={index}>
            <h1>Frage {index + 1}</h1>
            <p>{frage.frage}</p>
            <p>Antwort: <input type="text" value={antworten[index]?.antwort || ''} onChange={(e) => {
              const newAntworten = [...antworten];
              newAntworten[index] = { ...newAntworten[index], antwort: e.target.value };
              setAntworten(newAntworten);
            }} /></p>
          </Page>
        ))}
      </HTMLFlipBook>

      <button id="saveAnswers" onClick={handleSaveAnswers}>Antworten speichern</button>

      <button id="ZurückFlipBook">
        <Link to="/6-Freunde">6. Seite</Link>
      </button>
    </>
  );
}

export default DemoBook;
