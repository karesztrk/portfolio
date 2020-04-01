import React from 'react';
import { Link } from 'gatsby';
import logo from 'assets/icons/logo.png';
import { Container } from 'components/common';
import { NavbarLinks } from '../NavbarLinks';
import { Wrapper, Logo } from './styles';

export const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <Logo src={logo} alt="Logo" />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);
