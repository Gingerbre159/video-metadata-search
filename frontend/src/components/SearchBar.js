import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
      console.log('Searching with query:', query); // Debugging

      if (!query.trim()) {
          alert('Please enter a search query.');
          return;
      }
      onSearch(query.trim());
  };

  return (
    <div>
      <h2>Search Videos</h2>
      <input
        type="text"
        placeholder="Search by title or tags"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
