// src/App.js
import React, { useState } from 'react';
import { mockData } from './data/mockData';
import SearchBox from './components/SearchBox';
import ResultCard from './components/ResultCard';
import './styles/App.scss';

function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredResults = mockData.filter((item) => 
    (filter === 'All' || item.category === filter) &&
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Search Page</h1>
      <SearchBox query={query} setQuery={setQuery} />
      <div className="filter">
        <label>Filter by Category: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Programming">Programming</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
        </select>
      </div>
      <div className="results">
        {filteredResults.map((result) => (
          <ResultCard key={result.id} {...result} />
        ))}
      </div>
    </div>
  );
}

export default App;
