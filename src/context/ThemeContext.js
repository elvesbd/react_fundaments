import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';


import themes from '../styles/themes';

export const ThemeContext = createContext('dark');


export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{onToggleTheme: handleToggleTheme, selectedTheme: theme}}>
      <ThemeProvider theme={currentTheme}>
        { children }
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}