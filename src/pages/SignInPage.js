import React, { useState } from "react";
import SignUpPage from "./SignUpPage";
import axios from "axios";
import OtpVerify from "../component/OtpVerify";
import "./pages.css";

const SignInPage = ({ setSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [otpVerify , setOtpVerify] = useState(false)

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      username: userName,
      password: password,
    };

    try {
      const response = await axios.post("https://pothuraju.vercel.app/auth/login", user);
      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        setSignIn(false);
      } else {
        const { message } = response.data;
        alert(message);
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return signUp ? (
    <SignUpPage setSignUp={setSignUp} setOtpVerify={setOtpVerify}/>
  ) : otpVerify ? <OtpVerify setSignUp={setSignUp} setOtpVerify={setOtpVerify} /> : (
    <div className="container">
      <h2>Sign In</h2>
      <form id="signInForm" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <button className="button" type="submit">
          Sign In
        </button>
      </form>

      <p className="note">
        Don't have an account?
        <span onClick={() => setSignUp(true)}> Sign Up</span>
      </p>
    </div>
  );
};

export default SignInPage;
