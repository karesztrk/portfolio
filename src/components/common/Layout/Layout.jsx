import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Global, Main } from './styles';
import './fonts.css';

const theme = {
  primaryColor: '#a7ff83',
  secondaryColor: '#17b978',
  tertiaryColor: '#086972',
  quaternaryColor: '#071a52',
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Main>
      <Global />
      {children}
    </Main>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.array,
};
