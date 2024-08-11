import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // For navigation
import Navbar from './Navbar';
import './cart.css';

const SCart = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); // Initialize navigate for redirecting

  useEffect(() => {
    // Fetch cart and items from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    
    setCart(storedCart);
    setItems(storedItems);
  }, []);

  const getCartItemsWithDetails = () => {
    return cart.map(cartItem => {
      const itemDetails = items.find(item => item.id === cartItem.items_id);
      return {
        ...cartItem,
        details: itemDetails || {}
      };
    });
  };

  const updateQuantity = (itemId, delta) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(cartItem => {
        if (cartItem.items_id === itemId) {
          return {
            ...cartItem,
            quantity: Math.max(cartItem.quantity + delta, 1)
          };
        }
        return cartItem;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeItem = (itemId) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(cartItem => cartItem.items_id !== itemId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, cartItem) => {
      const itemDetails = items.find(item => item.id === cartItem.items_id);
      return total + (itemDetails ? itemDetails.price * cartItem.quantity : 0);
    }, 0).toFixed(2);
  };

  const handleOrder = () => {
    // Get user information from localStorage or session
    const user = JSON.parse(localStorage.getItem('user')) || {};

    // Save order details (example structure)
    const order = {
      userId: user.id,
      items: cart,
      total: calculateTotal(),
      date: new Date().toISOString()
    };

    // Save order to localStorage or send to server
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart after ordering
    setCart([]);
    localStorage.removeItem('cart');

    // Navigate to MyOrders page
    navigate('/myorders');
  };

  const cartItems = getCartItemsWithDetails();
  const totalAmount = calculateTotal();

  return (
    <div>
      <Navbar />
      <div className='cart-container pt-4 pb-5'>
        {cartItems.length === 0 ? (
          <p className='text-center'>Your cart is empty.</p>
        ) : (
          cartItems.map(cartItem => (
            <div key={cartItem.items_id} className='sitem-container mb-4'>
              <div className='d-flex flex-wrap'>
                <div className='d-flex'>
                  <img src={cartItem.details.imgurl} alt={cartItem.details.title} className='cart-item-img' />
                </div>
                <div className='ml-2'>
                  <h6>{cartItem.details.title}</h6>
                  <p>Price: ${cartItem.details.price.toFixed(2)}</p>

                  <div className='d-flex mt-4'>
                    <div className='quantity-container d-flex'>
                      <button 
                        onClick={() => updateQuantity(cartItem.items_id, -1)}
                        aria-label={`Decrease quantity of ${cartItem.details.title}`}
                        className='d-flex justify-content-center align-items-center'
                      >
                        -
                      </button>
                      <span className='mx-2'>{cartItem.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(cartItem.items_id, 1)}
                        aria-label={`Increase quantity of ${cartItem.details.title}`}
                        className='d-flex justify-content-center align-items-center'
                      >
                        +
                      </button>
                    </div>
                    <div
                      onClick={() => removeItem(cartItem.items_id)}
                      aria-label={`Remove ${cartItem.details.title} from cart`}
                      className='ml-5 mt-2'
                    >
                      <FontAwesomeIcon icon={faTrashCan} style={{ color: 'red' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div className='text-center mt-5'>
            <h3>Total Amount: ${totalAmount}</h3>
            <button 
              onClick={handleOrder}
              className='btn btn-warning'
            >
              Order Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SCart;
