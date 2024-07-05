import React, { useState } from "react";
import "./pages.css";

const SignUpPage = ({ setSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <h2>Pizza Delivery Registration</h2>
      <p className="note">
        Already have an account?
        <span onClick={() => setSignUp(false)}> Sign In</span>
      </p>
      <form id="registrationForm">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

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
          required
        />

        <label htmlFor="address">Delivery Address</label>
        <textarea id="address" name="address" required></textarea>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUpPage;
