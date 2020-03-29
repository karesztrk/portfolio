import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#experience">Experience</AnchorLink>
    <AnchorLink href="#">Contact</AnchorLink>
  </Wrapper>
);

NavbarLinks.propTypes = {
  desktop: PropTypes.bool,
};

export default NavbarLinks;
