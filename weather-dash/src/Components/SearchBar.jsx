import React, { useState } from "react";
import "../style.css"; // Go one directory up to access the style.css

const SearchBar = ({ onSearch, setCity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setCity(inputValue);
    onSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
