import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import DisplayItems from "../component/DisplayItems";
import Search from "../component/Search";
import axios from "axios";
import "./pages.css";

function LandingPage() {
  const initialItems = JSON.parse(localStorage.getItem("items")) || [];
  const [items, setItems] = useState(initialItems);
  const [filtered, setFiltered] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get("https://pothuraju.vercel.app/items",{headers:{
          'Authorization':token
        }});
        localStorage.setItem('items',JSON.stringify(res.data));
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
          <div className="mt-5 mb-0">
            <h5 className="ml-3 mb-0 text-lg-center">What do you want to eat today?</h5>
            <Search setFiltered={setFiltered} items={items} className='mt-0'/>
          </div>
          <div className="filter-buttons mt-0">
            <button onClick={displayAll}>All</button>
            <button onClick={displayVeg}>Veg</button>
            <button onClick={displayNonVeg}>Non Veg</button>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <DisplayItems items={filtered} />
          </div>
        </>
    </div>
  );
}

export default LandingPage;
