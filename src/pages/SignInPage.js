import React, { useState } from "react";
import SignUpPage from "./SignUpPage";
import "./pages.css";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return signUp ? (
    <SignUpPage setSignUp={setSignUp} />
  ) : (
    <div className="container">
      <h2>Pizza Delivery Sign In</h2>
      <form id="signInForm">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          required
        />

        <div className="show-password">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={handleShowPasswordChange}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        <button type="submit">Sign In</button>
      </form>

      <p className="note">
        Don't have an account?
        <span onClick={() => setSignUp(true)}> Sign Up</span>
      </p>
    </div>
  );
};

export default SignInPage;
