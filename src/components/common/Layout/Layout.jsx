import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, css } from 'styled-components';
import { Global, Main } from './styles';
import './fonts.css';

const breakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const respMin = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

const theme = {
  primaryColor: '#a7ff83',
  secondaryColor: '#17b978',
  tertiaryColor: '#086972',
  quaternaryColor: '#071a52',
  breakpoints,
  primaryFont: "'Nunito', Open Sans",
  secondaryFont: "'Montserrat', Open Sans",
  ...respMin,
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
