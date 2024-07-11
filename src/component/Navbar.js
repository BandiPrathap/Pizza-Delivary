import React, { useState, useEffect } from "react";
import "../App.css";

function Navbar({ setSignIn }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    token ? setIsLogin(true) : setIsLogin(false);
  });

  const logOut = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Pothuraju</a>
        <button
          className="navbar-toggler"
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
            <a className="nav-link active">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link">Dishes</a>
            {isLogin ? (
              <>
                <a className="nav-link">Profile</a>
                <a className="nav-link">my orders</a>
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
