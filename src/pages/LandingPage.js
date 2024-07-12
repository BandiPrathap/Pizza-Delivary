import React, { useState, useEffect } from "react";
import SignInPage from "./SignInPage";
import Navbar from "../component/Navbar";
import DisplayItems from "../component/DisplayItems";
import Cart from "../component/Cart";
import axios from "axios";
import "./pages.css";

function LandingPage() {
  const [signIn, setSignIn] = useState(false);
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState(items);
  const [cartItems, setCartItems] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:5001/items").then((res) => {
        setItems(res.data);
        setFiltered(res.data);
      });
    };
    fetchData();
  }, []);
  const displayAll = () => {
    setFiltered(items);
  };

  const displayVeg = () => {
    setFiltered(items.filter((item) => item.isVegetarian));
  };

  const displayNonVeg = () => {
    setFiltered(items.filter((item) => !item.isVegetarian));
  };

  return signIn ? (
    <SignInPage setSignIn={setSignIn} />
  ) : (
    <div>
      <Navbar setSignIn={setSignIn} setCartItems={setCartItems} />
      {cartItems ? (
        <Cart />
      ) : (
        <>
          <div className="filter-buttons">
            <button onClick={displayAll}>All</button>
            <button onClick={displayVeg}>Veg</button>
            <button onClick={displayNonVeg}>Non Veg</button>
          </div>
          <DisplayItems items={filtered} />
        </>
      )}
    </div>
  );
}

export default LandingPage;
