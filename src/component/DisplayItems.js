import React from "react";
import "./items.css";

function DisplayItems({ items }) {
  return (
    <div className="items-container">
      {items.map((item) => (
        <>
          <div key={`items${item.id}`} className="item-container">
            <div className="item">
              <img src={item.imgurl} alt={item.title} />
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
