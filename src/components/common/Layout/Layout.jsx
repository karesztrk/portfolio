import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, css } from 'styled-components';
import { loadScheme, saveScheme } from 'data/storage';
import { Global } from './styles';
import './fonts.css';
import schemes from './schemes.json';

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

const applyScheme = (theme, scheme) => {
  const { schemes: colorSchemes } = theme;
  const selectedScheme = colorSchemes.find(s => s.name === scheme);
  const colors = selectedScheme && selectedScheme.colors;
  return {
    ...theme,
    ...colors,
  };
};

export const Layout = ({ children }) => {
  const [selectedScheme, setSelectedScheme] = useState();
  const defaultTheme = {
    primaryColor: '#a7ff83',
    secondaryColor: '#17b978',
    tertiaryColor: '#086972',
    quaternaryColor: '#071a52',
    breakpoints,
    primaryFont: "'Nunito', Open Sans",
    secondaryFont: "'Montserrat', Open Sans",
    ...respMin,
    onChangeScheme: name => setSelectedScheme(name),
    schemes,
  };

  const t = applyScheme(defaultTheme, loadScheme());
  const [theme, setTheme] = useState(t);

  useEffect(() => {
    saveScheme(selectedScheme);
    const newTheme = applyScheme(theme, selectedScheme);
    setTheme(newTheme);
  }, [selectedScheme]);
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};
