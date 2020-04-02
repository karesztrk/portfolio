import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { NavbarLinks } from '../NavbarLinks';
import { Wrapper, LogoImage } from './styles';

export const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <LogoImage />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);
