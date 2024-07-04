import React, { useState } from "react";
import SignInPage from "./SignInPage";
import Navbar from "../component/Navbar";
import "./pages.css";

function LandingPage() {
  const [signIn, setSignIn] = useState(false);

  return signIn ? (
    <SignInPage />
  ) : (
    <div>
      <Navbar setSignIn={setSignIn} />
      <h1 className="hello">hello World</h1>
    </div>
  );
}

export default LandingPage;
