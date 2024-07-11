import React, { useState } from "react";
import axios from "axios";

import "./pages.css";

const SignUpPage = ({ setSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
      mobileNo: mobileNo,
      address: address,
    };

    try {
      const response = await axios.post("http://localhost:5001/register", user);
      const { message } = response.data;
      alert(message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <h2>Registration</h2>
      <p className="note">
        Already have an account?
        <span onClick={() => setSignUp(false)}> Sign In</span>
      </p>
      <form id="registrationForm" onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          required
        />

        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          pattern="[0-9]{10}"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          required
        />

        <label htmlFor="address">Delivery Address</label>
        <textarea
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>

        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
