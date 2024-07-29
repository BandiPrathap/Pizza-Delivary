import React, { useState, useRef } from 'react';
import axios from 'axios';

const  OtpVerify= ({setSignUp ,setOtpVerify}) => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputs = useRef([]);

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

  const verifyOtp=async()=>{
    const Otp = otp.reduce((acc,curr)=>acc+curr);
    const res = await axios.post("https://pothuraju.vercel.app/auth/verify-otp",{'email':"bandiprathap653@gmail.com","otp":Otp});
    const {message} = res.data;
    alert(message);
    if(message!=="Invalid or expired OTP"){
      setOtpVerify(false);
    }

  }



  return (
    <div>
      <h3>Email Verification</h3>
      <div style={{ display: 'flex', gap: '8px' }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el)}
          maxLength={1}
          style={{ width: '2rem', height: '2rem', textAlign: 'center', fontSize: '1.5rem' }}
        />
      ))}
    </div>
    <button className="btn btn-primary" onClick={verifyOtp}>verify</button>
    </div>
  );
};

export default OtpVerify;
