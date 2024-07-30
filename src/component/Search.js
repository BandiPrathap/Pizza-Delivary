import React, { useState, useEffect } from 'react';
import './Search.css';

const Search = ({ setFiltered, items }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const lowercasedInput = inputValue.toLowerCase();
    const filtered = items.filter((item) => item.title.toLowerCase().includes(lowercasedInput));
    setFiltered(filtered);
  }, [inputValue, items, setFiltered]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a pizza..."
        className="search-input"
      />
    </div>
  );
};

export default Search;
