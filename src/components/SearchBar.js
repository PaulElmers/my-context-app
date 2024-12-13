import React, { useState } from 'react';
import { useSearch } from './SearchContext';

const Search = () => {
  const { searchTerm, setSearchTerm, results, performSearch } = useSearch();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    performSearch(query);
    setSearchTerm(query);
  };

  return (
    <div>
      <h2>Пошук</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введіть запит..."
      />
      <button onClick={handleSearch}>Шукати</button>
      <h3>Результати для "{searchTerm}"</h3>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
