import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';
import { ThemeSelector } from '../ThemeSelector';

export const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#experience">Experience</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
    <ThemeSelector />
  </Wrapper>
);

NavbarLinks.propTypes = {
  desktop: PropTypes.bool,
};
