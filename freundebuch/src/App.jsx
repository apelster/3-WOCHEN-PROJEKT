import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Datenschutz from "./components/Datenschutz/Datenschutz.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />

        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
