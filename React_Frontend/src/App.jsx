// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./styles.css";

import Home from "./components/Home/Home.jsx";
import Contact from "./components/Kontakt/Kontakt.jsx";
import Datenschutz from "./components/Datenschutz/Datenschutz.jsx";
import Impressum from "./components/Impressum/Impressum.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Datenschutzerklärung from "./components/Datenschutz/Datenschutzerklärung.jsx";

import Freunde from "./components/Freundebuch/0-FreundeProfil.jsx";
import Freunde1 from "./components/Freundebuch/1-Freunde.jsx";
import Freunde2 from "./components/Freundebuch/2-Freunde.jsx";
import Freunde3 from "./components/Freundebuch/3-Freunde.jsx";
import Freunde4 from "./components/Freundebuch/4-Freunde.jsx";
import Freunde5 from "./components/Freundebuch/5-Freunde.jsx";
import Freunde6 from "./components/Freundebuch/6-Freunde.jsx";

import DemoBook from "./components/FlipBook/FlipBook.jsx";

import Register from "./components/RecConLog/register.jsx";
import Login from "./components/RecConLog/login.jsx";
import Confirm from "./components/RecConLog/confirm.jsx";

import Profil1 from "./components/Profil/1-Profil-Rohling.jsx";

import Book from "./components/MeineFreundeSeite/MeineFreundeSeite.jsx";

import Chat from "./components/Chat/chat.jsx";

function App() {
  const location = useLocation();
  const profilId = 1;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Datenschutz" element={<Datenschutz />} />
        <Route path="/Impressum" element={<Impressum />} />
        <Route
          path="/Datenschutzerklärung"
          element={<Datenschutzerklärung />}
        />


        <Route path="/0-Freunde" element={<Freunde profilId={profilId} />} />
        <Route path="/1-Freunde" element={<Freunde1 profilId={profilId} />} />
        <Route path="/2-Freunde" element={<Freunde2 profilId={profilId} />} />
        <Route path="/3-Freunde" element={<Freunde3 profilId={profilId} />} />
        <Route path="/4-Freunde" element={<Freunde4 profilId={profilId} />} />
        <Route path="/5-Freunde" element={<Freunde5 profilId={profilId} />} />
        <Route path="/6-Freunde" element={<Freunde6 />}></Route>
        <Route path="/FlipBook" element={<DemoBook profilId={profilId} />} />
        <Route path="/MeineFreunde" element={<Book />} />
        <Route path="/Profil" element={<Profil1 />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
