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
import DemoBook from "./components/FlipBook/FlipBook.jsx";

import Register from "./components/RecConLog/register.jsx";
import Login from "./components/RecConLog/login.jsx";
import Confirm from "./components/RecConLog/confirm.jsx";

import Profil1 from "./components/Profil/1-Profil-Rohling.jsx";

import Book from "./components/MeineFreundeSeite/MeineFreundeSeite.jsx";

import Freunde11 from "./components/Freundebuch/Freunde-11.jsx";
import Freunde12 from "./components/Freundebuch/Freunde-12.jsx";
import Freunde13 from "./components/Freundebuch/Freunde-13.jsx";
import Freunde14 from "./components/Freundebuch/Freunde-14.jsx";
import Freunde15 from "./components/Freundebuch/Freunde-15.jsx";
import Freunde16 from "./components/Freundebuch/Freunde-16.jsx";


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
        <Route path="/12-Freunde" element={<Freunde12 />}></Route>
        <Route path="/13-Freunde" element={<Freunde13 />}></Route>
        <Route path="/14-Freunde" element={<Freunde14 />}></Route>
        <Route path="/15-Freunde" element={<Freunde15 />}></Route>
        <Route path="/16-Freunde" element={<Freunde16 />}></Route>
        <Route path="/FlipBook" element={<DemoBook />}></Route>

        <Route path="/MeineFreunde" element={<Book/>}></Route>


        <Route path="/Profil" element={<Profil1/>}></Route>


        <Route path="/confirm" element={<Confirm />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

