import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";

import MainContent from "./components/MainContent/MainContent.jsx";
import Contact from './components//Kontakt/Kontakt.jsx'
import Datenschutz from './components/Datenschutz/Datenschutz.jsx'
import Impressum from './components/Impressum/Impressum.jsx'



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Kontakt" element={<Contact />} />
          <Route path="/Datenschutz" element={<Datenschutz />} />
          <Route path="/Impressum" element={<Impressum />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
