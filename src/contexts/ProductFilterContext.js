import React, { createContext, useState, useContext } from 'react';

const ProductFilterContext = createContext();

export const ProductFilterProvider = ({ children }) => {
  const [category, setCategory] = useState('всі');

  const changeCategory = (newCategory) => setCategory(newCategory);

  return (
    <ProductFilterContext.Provider value={{ category, changeCategory }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

export const useProductFilter = () => useContext(ProductFilterContext);
