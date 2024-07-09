import React, { useState } from "react";
import "./pages.css";
import LandingPage from "./LandingPage";

function WellcomePage() {
  const [homePage, setHomePage] = useState(false);
  const [login, setLogIn] = useState(false);

  return homePage || login ? (
    <LandingPage setLogin={setLogIn} />
  ) : (
    <div>
      <div className="landing-page-background"></div>
      <div className="logo">
        <h1>Pothuraju</h1>
        <p>Delicious pizza with fast delivery and best customer support</p>
      </div>
      <div className="image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zpd3buZ3oEjJejjvB8F9MoB8WSXAeV59og"
          alt="Pizza"
        />
      </div>
      <div className="start">
        <button onClick={() => setHomePage(true)}>Get Started</button>
      </div>
    </div>
  );
}

export default WellcomePage;
