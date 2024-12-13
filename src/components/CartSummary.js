import React from 'react';
import { useCart } from './CartContext';

const CartSummary = () => {
  const { cartItems } = useCart();

  return <p>Кількість товарів у кошику: {cartItems.length}</p>;
};

export default CartSummary;
