import React, { useState, useEffect } from "react";
import "./items.css";

function Cart() {
  const initialItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = useState(initialItems);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.imgurl} alt={item.title} />
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>Price: {item.price}</p>
                    <p>{item.description}</p>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
