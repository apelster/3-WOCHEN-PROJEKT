import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import "./components/MainContent/MainContent.css"

import MainContent from "./components/MainContent/MainContent.jsx";
import Contact from './components/Kontakt/Kontakt.jsx'
import Datenschutz from './components/Datenschutz/Datenschutz.jsx'
import Impressum from './components/Impressum/Impressum.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from "./components/Header/Header.jsx";


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
      <Route path="/" element={<MainContent/>} />
      <Route path="/Kontakt" element={<Contact />} />
      <Route path="/Datenschutz" element={<Datenschutz />} />
      <Route path="/Impressum" element={<Impressum />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
