import React, { FC, useEffect, useState } from 'react';
import {
  ThemeProvider,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { loadScheme, saveScheme } from 'data/storage';
import { Global } from './styles';
import './fonts.css';
import schemes from './schemes.json';
import { createMedia } from '@artsy/fresnel';
import { AnimateSharedLayout } from 'framer-motion';

type BreakPointKey = 'sm' | 'md' | 'lg' | 'xl';

interface Breakpoints {
  [key: string]: number;
}

export interface MediaQueryies {
  [key: string]: (args: any) => FlattenSimpleInterpolation;
}

interface Scheme {
  name: string;
  colors: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    quaternaryColor: string;
  };
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  quaternaryColor: string;
  breakpoints: Breakpoints;
  headerFamily: string;
  textFamily: string;
  onChangeScheme: (name: string) => void;
  schemes: Scheme[];
}

const breakpoints: Breakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const AppMedia = createMedia({
  breakpoints,
});

export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
// https://github.com/styled-components/styled-components/issues/2303
const respMin: MediaQueryies = Object.keys(breakpoints).reduce<MediaQueryies>(
  (accumulator, label) => {
    accumulator[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;
    return accumulator;
  },
  {},
);

const applyScheme = (theme: Theme, scheme: string | null | undefined) => {
  const { schemes: colorSchemes } = theme;
  const selectedScheme = colorSchemes.find((s) => s.name === scheme);
  const colors = selectedScheme && selectedScheme.colors;
  return {
    ...theme,
    ...colors,
  };
};

export const Layout: FC = ({ children }) => {
  const [selectedScheme, setSelectedScheme] = useState<string>();
  const defaultTheme: Theme = {
    primaryColor: '#a7ff83',
    secondaryColor: '#17b978',
    tertiaryColor: '#086972',
    quaternaryColor: '#071a52',
    breakpoints,
    headerFamily: "'Barlow', sans-serif",
    textFamily: "'Inter', sans-serif",
    ...respMin,
    onChangeScheme: (name: string) => setSelectedScheme(name),
    schemes,
  };

  const t = applyScheme(defaultTheme, loadScheme());
  const [theme, setTheme] = useState(t);

  useEffect(() => {
    if (selectedScheme) {
      saveScheme(selectedScheme);
      const newTheme = applyScheme(theme, selectedScheme);
      setTheme(newTheme);
    }
  }, [selectedScheme]);
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <AnimateSharedLayout type='crossfade'>
        <div style={{ overflow: 'hidden' }}>{children}</div>
      </AnimateSharedLayout>
    </ThemeProvider>
  );
};
