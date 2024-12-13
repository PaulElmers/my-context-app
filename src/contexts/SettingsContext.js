import React, { createContext, useState, useContext } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () =>
    setNotificationsEnabled((prev) => !prev);

  return (
    <SettingsContext.Provider value={{ notificationsEnabled, toggleNotifications }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
