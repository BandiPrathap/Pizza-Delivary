import React from "react";
import { BrowserRouter as Router , Route,Routes } from "react-router-dom";
import WellcomePage from "./pages/WellcomePage";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import OtpVerify from "./component/OtpVerify";
import Search from "./component/Search";
import Profile from "./pages/Profile";
import Cart from "./component/Cart";
import MyOrders from "./component/MyOrders";
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
        <Route path='/profile' element={<Profile />}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </Router>
  );
}

export default App;
