import React from 'react';
import { useProductFilter } from './ProductFilterContext';

const products = [
  { id: 1, name: 'Телефон', category: 'електроніка' },
  { id: 2, name: 'Ноутбук', category: 'електроніка' },
  { id: 3, name: 'Футболка', category: 'одяг' },
  { id: 4, name: 'Штани', category: 'одяг' },
];

const ProductList = () => {
  const { category, changeCategory } = useProductFilter();

  const filteredProducts =
    category === 'всі' ? products : products.filter((p) => p.category === category);

  return (
    <div>
      <h2>Категорія: {category}</h2>
      <button onClick={() => changeCategory('всі')}>Всі</button>
      <button onClick={() => changeCategory('електроніка')}>Електроніка</button>
      <button onClick={() => changeCategory('одяг')}>Одяг</button>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
