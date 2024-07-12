import React, { useState, useEffect } from "react";
import "./items.css";
import SignInPage from "../pages/SignInPage";

function DisplayItems({ items }) {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="items-container">
      {items.map((item) => (
        <>
          <div key={`items${item.id}`} className="item-container">
            <div className="item">
              <img src={item.imgurl} alt={item.title} />
              <button className="add-cart" onClick={() => addCart(item)}>
                Add
              </button>
            </div>
            <div className="item-content">
              <h1>{item.title}</h1>
              <p>Price : {item.price}</p>
              <p>{item.description}</p>
            </div>
          </div>
          <hr className="hr-line" key={`line${item.id}`} />
        </>
      ))}
    </div>
  );
}

export default DisplayItems;