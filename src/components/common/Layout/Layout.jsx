import React from 'react';
import PropTypes from 'prop-types';
import { Global, Main } from './styles';
import './fonts.css';

export const Layout = ({ children }) => (
  <Main>
    <Global />
    {children}
  </Main>
);

Layout.propTypes = {
  children: PropTypes.array,
};
