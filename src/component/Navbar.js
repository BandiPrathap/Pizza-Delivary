import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import "../App.css";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    token ? setIsLogin(true) : setIsLogin(false);
  },[]);

  const logOut = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
    localStorage.removeItem('user');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <Link className="navbar-brand text-danger font-weight-bold">Pothuraju</Link>
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
            <Link className="nav-link active text-light font-weight-bold" to='/home'>
              Home <span className="sr-only">(current)</span>
            </Link>
            {isLogin ? (
              <>
                <Link className="nav-link text-light font-weight-bold" to='/profile'>Profile</Link>
                <Link to='/cart' className="nav-link text-light font-weight-bold">
                  Cart
                </Link>
                <Link to='/myorders'className="nav-link text-light font-weight-bold">MyOrders</Link>
                <Link className="nav-link text-danger font-weight-bold" onClick={logOut}>
                  Sign Out
                </Link>
              </>
            ) : (
              <Link to='/auth/login' className="nav-link text-light font-weight-bold">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
