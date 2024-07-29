import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import "./pages.css";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
        navigate('/home');
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

  return (
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
        <span><Link to='/auth/register'>Sign Up</Link></span>
      </p>
    </div>
  );
};

export default SignInPage;
