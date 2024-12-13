import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const performSearch = (query) => {
    const mockData = ['React', 'JavaScript', 'TypeScript', 'Angular'];
    setResults(mockData.filter((item) => item.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, results, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
