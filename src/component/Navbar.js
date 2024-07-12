import React, { useState, useEffect } from "react";
import LandingPage from "../pages/LandingPage";

import "../App.css";

function Navbar({ setSignIn, setCartItems }) {
  const [isLogin, setIsLogin] = useState(false);
  const [home, setHome] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    token ? setIsLogin(true) : setIsLogin(false);
  });

  const logOut = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
  };

  return home ? (
    <LandingPage />
  ) : (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Pothuraju</a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" onClick={() => setHome(true)}>
              Home <span className="sr-only">(current)</span>
            </a>
            {isLogin ? (
              <>
                <a className="nav-link">Profile</a>
                <a className="nav-link" onClick={() => setCartItems(true)}>
                  Cart
                </a>
                <a className="nav-link">MyOrders</a>
                <a className="nav-link red" onClick={logOut}>
                  Sign Out
                </a>
              </>
            ) : (
              <a className="nav-link" onClick={() => setSignIn(true)}>
                Sign In
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
