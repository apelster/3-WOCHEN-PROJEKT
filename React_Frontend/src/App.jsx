import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";

import Home from "./components/Home/Home.jsx";
import Contact from './components/Kontakt/Kontakt.jsx';
import Datenschutz from './components/Datenschutz/Datenschutz.jsx';
import Impressum from './components/Impressum/Impressum.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from "./components/Header/Header.jsx";
import Datenschutzerklärung from "./components/Datenschutz/Datenschutzerklärung.jsx";
import Freunde1 from "./components/Freundebuch/1-Freunde.jsx";
import Freunde2 from "./components/Freundebuch/2-Freunde.jsx";
import Freunde3 from "./components/Freundebuch/3-Freunde.jsx";
import Freunde4 from "./components/Freundebuch/4-Freunde.jsx";
import Freunde5 from "./components/Freundebuch/5-Freunde.jsx";
import Freunde6 from "./components/Freundebuch/6-Freunde.jsx";
import Freunde7 from "./components/Freundebuch/7-Freunde.jsx";
import Freunde8 from "./components/Freundebuch/8-Freunde.jsx";
import Freunde9 from "./components/Freundebuch/9-Freunde.jsx";
import Freunde10 from "./components/Freundebuch/10-Freunde.jsx";
import Freunde11 from "./components/Freundebuch/11-Freunde.jsx";
import DemoBook from "./components/FlipBook/FlipBook.jsx";

import Register from "./components/RecConLog/register.jsx";
import Login from "./components/RecConLog/login.jsx";
import Confirm from "./components/RecConLog/confirm.jsx";

import Profil1 from "./components/Profil/1-Profil-Rohling.jsx";
import Profil2 from "./components/Profil/2-Profil.jsx";
import Profil3 from "./components/Profil/3-Profil.jsx";
import Profil4 from "./components/Profil/4-Profil-complete.jsx";
import Profil5 from "./components/Profil/5-Profil.jsx";
import Profil6 from "./components/Profil/6-ProfilFreunde-Icons.jsx";
import Profil7 from "./components/Profil/7-ProfilFreunde-Flipbook.jsx";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Datenschutz" element={<Datenschutz />} />
        <Route path="/Impressum" element={<Impressum />} />
        <Route path="/Datenschutzerklärung" element={<Datenschutzerklärung />} />
        <Route path="/Freundebuch" element={<Freunde1 />}></Route>
        <Route path="/2-Freunde" element={<Freunde2 />}></Route>
        <Route path="/3-Freunde" element={<Freunde3 />}></Route>
        <Route path="/4-Freunde" element={<Freunde4 />}></Route>
        <Route path="/5-Freunde" element={<Freunde5 />}></Route>
        <Route path="/6-Freunde" element={<Freunde6 />}></Route>
        <Route path="/7-Freunde" element={<Freunde7 />}></Route>
        <Route path="/8-Freunde" element={<Freunde8 />}></Route>
        <Route path="/9-Freunde" element={<Freunde9 />}></Route>
        <Route path="/10-Freunde" element={<Freunde10 />}></Route>
        <Route path="/11-Freunde" element={<Freunde11 />}></Route>
        <Route path="/FlipBook" element={<DemoBook />}></Route>

        <Route path="/1-Profil" element={<Profil1/>}></Route>
        <Route path="/2-Profil" element={<Profil2/>}></Route>
        <Route path="/3-Profil" element={<Profil3/>}></Route>
        <Route path="/4-Profil" element={<Profil4/>}></Route>
        <Route path="/5-Profil" element={<Profil5/>}></Route>
        <Route path="/6-Profil" element={<Profil6/>}></Route>
        <Route path="/7-Profil" element={<Profil7/>}></Route>
        

        <Route path="/confirm" element={<Confirm />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

