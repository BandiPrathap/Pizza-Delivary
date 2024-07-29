import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import DisplayItems from "../component/DisplayItems";
import axios from "axios";
import "./pages.css";

function LandingPage() {
  const initialItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [items, setItems] = useState(initialItems);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://pothuraju.vercel.app/pizza");
        setItems(res.data);
        setFiltered(res.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
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

  return (
    <div>
      <Navbar/>
        <>
          <div className="filter-buttons ml-lg-5 mt-5 pl-lg-5">
            <button onClick={displayAll}>All</button>
            <button onClick={displayVeg}>Veg</button>
            <button onClick={displayNonVeg}>Non Veg</button>
          </div>
          <DisplayItems items={filtered} />
        </>
    </div>
  );
}

export default LandingPage;
