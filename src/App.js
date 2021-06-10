import React from 'react';

import ThemeContextProvider from './context/ThemeContext';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';


function App() {
  return (
    <ThemeContextProvider>
        <GlobalStyle />
        <Layout />
    </ThemeContextProvider>
  );
};

export default App;
