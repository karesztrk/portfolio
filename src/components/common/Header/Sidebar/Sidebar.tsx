import React, { FC } from 'react';
import { NavbarLinks } from '../NavbarLinks';
import { Wrapper } from './styles';

interface SidebarProps {
  sidebar: boolean
  toggle: (value: boolean) => void
}

export const Sidebar: FC<SidebarProps> = ({ sidebar, toggle }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavbarLinks />
  </Wrapper>
);