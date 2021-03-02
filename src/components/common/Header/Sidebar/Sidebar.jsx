import React from 'react';
import { NavbarLinks } from '../NavbarLinks';
import { Wrapper } from './styles';

export const Sidebar = ({ sidebar, toggle }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavbarLinks />
  </Wrapper>
);