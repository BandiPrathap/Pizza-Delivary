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
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);

      setCart((prevCart) => {
        
        const existingItemIndex = prevCart.findIndex(cartItem => cartItem.items_id === item.id && cartItem.user_id === userData.id);

        let updatedCart;
        if (existingItemIndex !== -1) {
          
          updatedCart = [...prevCart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity: updatedCart[existingItemIndex].quantity + 1
          };
        } else {
          
          updatedCart = [
            ...prevCart,
            {
              user_id: userData.id,
              items_id: item.id,
              quantity: 1
            }
          ];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    } else {
      alert('Please sign in to your account');
    }
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
