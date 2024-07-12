import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import WellcomePage from "../pages/WellcomePage";
import Cart from "../component/Cart";
import DisplayItems from "../component/DisplayItems";
import Navbar from "../component/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wellcome" element={<WellcomePage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/display-items" element={<DisplayItems />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
