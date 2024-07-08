import React from "react";

function Navbar({ setSignIn }) {
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
              Home <span class="sr-only">(current)</span>
            </a>
            <a className="nav-link">Dishes</a>
            <a className="nav-link" onClick={() => setSignIn(true)}>
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
