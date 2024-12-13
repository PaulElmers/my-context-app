import React, { createContext, useState, useContext } from 'react';

const OrderFormContext = createContext();

export const OrderFormProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    address: '',
    items: [],
  });

  const updateOrderData = (field, value) => {
    setOrderData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <OrderFormContext.Provider value={{ orderData, updateOrderData }}>
      {children}
    </OrderFormContext.Provider>
  );
};

export const useOrderForm = () => useContext(OrderFormContext);
