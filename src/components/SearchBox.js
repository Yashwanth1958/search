// src/components/SearchBox.js
import React from 'react';
import '../styles/SearchBox.scss';

const SearchBox = ({ query, setQuery }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
