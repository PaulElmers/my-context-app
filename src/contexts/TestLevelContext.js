import React, { createContext, useState, useContext } from 'react';

const TestDifficultyContext = createContext();

export const TestDifficultyProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState('легкий');

  return (
    <TestDifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </TestDifficultyContext.Provider>
  );
};

export const useTestDifficulty = () => useContext(TestDifficultyContext);
