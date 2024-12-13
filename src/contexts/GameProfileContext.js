import React, { createContext, useState, useContext } from 'react';

const GameProfileContext = createContext();

export const GameProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({ name: 'Гравець', level: 1, points: 0 });

  const updateProfile = (updates) =>
    setProfile((prev) => ({ ...prev, ...updates }));

  return (
    <GameProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </GameProfileContext.Provider>
  );
};

export const useGameProfile = () => useContext(GameProfileContext);
