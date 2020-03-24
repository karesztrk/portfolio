import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#">About</AnchorLink>
    <AnchorLink href="#">Projects</AnchorLink>
    <AnchorLink href="#">Contact</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
