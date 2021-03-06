import React, { FC } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';
import { ThemeSelector } from '../ThemeSelector';

interface NavbarLinksProps {
  desktop?: boolean;
}

export const NavbarLinks: FC<NavbarLinksProps> = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href='#about'>About</AnchorLink>
    <AnchorLink href='#experience'>Experience</AnchorLink>
    <AnchorLink href='#projects'>Projects</AnchorLink>
    <AnchorLink href='#contact'>Contact</AnchorLink>
    <ThemeSelector />
  </Wrapper>
);
