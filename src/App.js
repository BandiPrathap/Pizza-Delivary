import React from "react";
import { BrowserRouter as Router , Route,Routes } from "react-router-dom";
import WellcomePage from "./pages/WellcomePage";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import OtpVerify from "./component/OtpVerify";
import Cart from "./component/Cart";
import Search from "./component/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WellcomePage/>}/>
        <Route path="/home" element={<LandingPage />}/>
        <Route path="/auth/register" element={<SignUpPage/>}/>
        <Route path="/auth/login" element={<SignInPage />}/>
        <Route path="/verify-otp" element={<OtpVerify />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
