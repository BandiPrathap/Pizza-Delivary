import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      const { token, message } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        toast.success("Login Successful!");
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error("Login failed! Please check your credentials and try again.");
    }
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-in mt-5">
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
        <div className="d-flex flex-row justify-content-between">
          <div className="show-password">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={handleShowPasswordChange}
              className="mt-3"
            />
            <label htmlFor="showPassword" className="mt-1">Show Password</label>
          </div>
          
        </div>
        

        <button className="btn btn-warning text-light" type="submit">
          Sign In
        </button>
      </form>

      <p className="note">
        Don't have an account?
        <span><Link to='/auth/register' className="text-danger"> Sign Up</Link></span>
      </p>

      <ToastContainer />
    </div>
    </div>
    
    
  );
};

export default SignInPage;
