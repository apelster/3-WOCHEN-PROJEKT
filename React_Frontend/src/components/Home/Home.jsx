import React from "react";
import "./Home.css";

const Home = () => {
  return (

    <div class="book">
      <div class="back"></div>
      <div class="page6"><button id="reg">Registrierung</button></div>
      <div class="page5"><button id="log">Login</button></div>
      <div class="page4"></div>
      <div class="page3"></div>
      <div class="page2"></div>
      <div class="page1"></div>
      <div class="front"><p id="freund">Dein Freundebuch</p></div>
    </div>
  );
};

export default Home;
