import React from "react";
import { Link } from 'react-router-dom';
import "./pages.css";

function WellcomePage() {
  return (
    <div>
      <div className="landing-page-background">
        <div className="logo big">
          <h1>Pothuraju</h1>
          <p>Delicious pizza with fast delivery and best customer support</p>
        </div>

        <div className="start big">
          <button className="btn btn-warning">
            <Link className="text-light text-decoration-none" to='/home'>Get Started</Link>
          </button>
        </div>
      </div>

      <div className="logo small">
        <h1>Pothuraju</h1>
        <p>Delicious pizza with fast delivery and best customer support</p>
      </div>

      <div className="image small">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zpd3buZ3oEjJejjvB8F9MoB8WSXAeV59og"
          alt="Delicious Pizza"
          className="img-fluid"
        />
      </div>

      <div className="start small">
        <button className="btn btn-warning">
          <Link className="text-light text-decoration-none" to='/home'>Get Started</Link>
        </button>
      </div>
    </div>
  );
}

export default WellcomePage;
