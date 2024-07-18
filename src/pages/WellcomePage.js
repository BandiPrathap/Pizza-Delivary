import React, { useState } from "react";
import "./pages.css";
import LandingPage from "./LandingPage";

function WellcomePage() {
  const [homePage, setHomePage] = useState(false);

  return homePage ? (
    <LandingPage />
  ) : (
    <div>
      <div className="landing-page-background">
        
      <div className="logo big">
        <h1>Pothuraju</h1>
        <p>Delicious pizza with fast delivery and best customer support</p>
      </div>

      <div className="start big">
        <button onClick={() => setHomePage(true)}>Get Started</button>
      </div>
      </div>
      <div className="logo small">
        <h1>Pothuraju</h1>
        <p>Delicious pizza with fast delivery and best customer support</p>
      </div>
      <div className="image small">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zpd3buZ3oEjJejjvB8F9MoB8WSXAeV59og"
          alt="Pizza"
        />
      </div>
      <div className="start small">
        <button onClick={() => setHomePage(true)}>Get Started</button>
      </div>
    </div>
  );
}

export default WellcomePage;
