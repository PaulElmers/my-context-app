import React from 'react';
import { useOrderForm } from './OrderFormContext';

const OrderForm = () => {
  const { orderData, updateOrderData } = useOrderForm();

  return (
    <div>
      <h2>Форма замовлення</h2>
      <input
        type="text"
        value={orderData.name}
        placeholder="Ім'я"
        onChange={(e) => updateOrderData('name', e.target.value)}
      />
      <input
        type="email"
        value={orderData.email}
        placeholder="Електронна пошта"
        onChange={(e) => updateOrderData('email', e.target.value)}
      />
      <textarea
        value={orderData.address}
        placeholder="Адреса"
        onChange={(e) => updateOrderData('address', e.target.value)}
      />
      <h3>Попередній перегляд замовлення:</h3>
      <p>Ім'я: {orderData.name}</p>
      <p>Email: {orderData.email}</p>
      <p>Адреса: {orderData.address}</p>
    </div>
  );
};

export default OrderForm;
