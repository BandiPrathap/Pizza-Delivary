import React, { useState } from "react";
import SignInPage from "./SignInPage";
import Navbar from "../component/Navbar";
import "./pages.css";

function LandingPage({setLogIn}) {
  const [signIn, setSignIn] = useState(false);

  return signIn ? (
    <SignInPage setLogIn = {setLogIn}/>
  ) : (
    <div>
      <Navbar setSignIn={setSignIn} />
      <h1 className="hello">hello World</h1>
    </div>
  );
}

export default LandingPage;
