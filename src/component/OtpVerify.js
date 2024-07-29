import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OtpVerify = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const location = useLocation();
  const { email } = location.state || {};
  const inputs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyOtp = async () => {
    const Otp = otp.reduce((acc, curr) => acc + curr);
    try {
      const res = await axios.post("https://pothuraju.vercel.app/auth/verify-otp", { email, otp: Otp });
      const { message } = res.data;
      alert(message);
      if (message !== "Invalid or expired OTP") {
        navigate('/auth/login');
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Email Verification</h3>
      <p className="mb-4">Your email: <strong>{email}</strong></p>
      <div className="d-flex justify-content-center mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputs.current[index] = el)}
            maxLength={1}
            className="form-control text-center mx-1"
            style={{ width: '3rem', height: '3rem', fontSize: '1.5rem' }}
          />
        ))}
      </div>
      <button className="btn btn-warning" onClick={verifyOtp}>Verify</button>
    </div>
  );
};

export default OtpVerify;
