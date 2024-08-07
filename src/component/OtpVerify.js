import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
      toast.success(message);

      setTimeout(() => {
        if (message !== "Invalid or expired OTP") {
          navigate('/auth/login');
        }
      }, 2000);
      
    } catch (error) {
      toast.error("Your enter wrong OTP. Try again");
    }
  };

  return (
    <div className="container w-10 mt-5">
      <h3 className="mb-4">Email Verification</h3>
      <p>We have send a 6-digits One Time Password(OTP) </p>
      <p className="mb-4">Your email: <strong>{email}</strong></p>
      <div className="d-flex mb-4">
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
            style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }}
          />
        ))}
      </div>
      <button className="btn btn-warning" onClick={verifyOtp}>Verify</button>
      <ToastContainer/>
    </div>
  );
};

export default OtpVerify;
