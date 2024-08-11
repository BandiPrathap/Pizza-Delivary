import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  console.log(orders);

  return (
    <div>
      <Navbar />
      <div className='my-orders-container pt-4'>
        {orders.length === 0 ? (
          <p className='text-center'>You have no orders yet.</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className='order-container mb-4'>
              <h4>Order Date: {new Date(order.date).toLocaleDateString()}</h4>
              <p>Total Amount: ${order.total}</p>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.details && item.details.title ? (
                      `${item.details.title} - ${item.quantity} x $${item.details.price.toFixed(2)}`
                    ) : (
                      `Item ${i + 1} (details not available)`
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
