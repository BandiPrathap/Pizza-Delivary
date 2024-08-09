import React, { useState, useEffect } from "react";
import ItemSkeleton from "../utils/ItemSkeleton";
import "./items.css";

function DisplayItems({ items }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Error parsing cart data from localStorage", e);
      return [];
    }
  });

  const addCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="items-container">
      <div className="w-100">
        <p className="ml-3 text-secondary">{items.length} Items Found</p>
      </div>
      {items.length === 0 ? (
        <>
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
        </>
      ) : (
        items.map((item) => (
          <React.Fragment key={item.id}>
            <div className="item-container">
              <div className="item">
                <img src={item.imgurl} alt={item.title} />
                <button className="add-cart" onClick={() => addCart(item)}>
                  Add
                </button>
              </div>
              <div className="item-content">
                <h1>{item.title}</h1>
                <p>Price: {item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
            <hr className="hr-line" />
          </React.Fragment>
        ))
      )}
    </div>
  );
}

export default DisplayItems;
