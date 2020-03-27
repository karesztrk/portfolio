import React from 'react';
import { Global, Main } from './styles';
import './fonts.css';

export const Layout = ({ children }) => (
  <Main>
    <Global />
    {children}
  </Main>
);
