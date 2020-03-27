import React from 'react';
import logo from 'assets/icons/logo.png';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <img src={logo} alt="logo" />
    {/* <Link to="/"></Link> */}
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
