import React, { useState, useEffect } from "react";

import "../App.css";

function Navbar({ setSignIn, setShowCart }) {
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
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand text-danger font-weight-bold">Pothuraju</a>
        <button
          className="navbar-toggler bg-warning"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon border-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-auto">
            <a className="nav-link active text-light font-weight-bold" onClick={() => setShowCart(false)}>
              Home <span className="sr-only">(current)</span>
            </a>
            {isLogin ? (
              <>
                <a className="nav-link text-light font-weight-bold">Profile</a>
                <a className="nav-link text-light font-weight-bold" onClick={() => setShowCart(true)}>
                  Cart
                </a>
                <a className="nav-link text-light font-weight-bold">MyOrders</a>
                <a className="nav-link text-danger font-weight-bold" onClick={logOut}>
                  Sign Out
                </a>
              </>
            ) : (
              <a className="nav-link text-light font-weight-bold" onClick={() => setSignIn(true)}>
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
