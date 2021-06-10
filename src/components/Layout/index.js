import React, {useContext} from 'react';
//import { useTheme } from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout() {
  const { onToggleTheme, selectedTheme} = useContext(ThemeContext);

  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
      <PostsList />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>

      {/* <div style={{
        marginTop: 24, 
        backgroundColor: theme.footerBackgroundColor, 
        padding: 24 }}
      >
        Hello World!
      </div> */}
    </>
  );
}
