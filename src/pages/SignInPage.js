import React, { useState } from 'react';
import './pages.css';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <h2>Pizza Delivery Sign In</h2>
      <form id="signInForm">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
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
    </div>
  );
};

export default SignIn;
