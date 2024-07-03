import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Pothuraju</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link">Dishes</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
