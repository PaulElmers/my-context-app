import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ 
      background: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#000000' : '#ffffff',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <button onClick={toggleTheme} style={{
        padding: '10px 20px',
        background: theme === 'light' ? '#000000' : '#ffffff',
        color: theme === 'light' ? '#ffffff' : '#000000',
        border: 'none',
        cursor: 'pointer'
      }}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
