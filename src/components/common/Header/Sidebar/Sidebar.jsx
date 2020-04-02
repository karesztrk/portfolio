import React from 'react';
import PropTypes from 'prop-types';
import { NavbarLinks } from '../NavbarLinks';
import { Wrapper } from './styles';

export const Sidebar = ({ sidebar, toggle }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavbarLinks />
  </Wrapper>
);

Sidebar.propTypes = {
  sidebar: PropTypes.bool,
  toggle: PropTypes.func,
};
