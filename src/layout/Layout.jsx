import React from 'react';
import { Footer, Header } from '../components';
import { useDarkMode } from '../hooks/useDarkMode.js';
import { lightTheme, darkTheme } from '../style/theme';
import { ThemeProvider } from 'styled-components';
import { Global } from '../style/global';

const Layout = ({ children }) => {
  const DarkMode = useDarkMode();

  return (
    <ThemeProvider theme={DarkMode.theme === 'light' ? lightTheme : darkTheme}>
      <Global />
      <Header toggleTheme={DarkMode.toggleTheme} theme={DarkMode.theme} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
