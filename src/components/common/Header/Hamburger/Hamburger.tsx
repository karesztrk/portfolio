import React, { FC } from 'react';
import { Wrapper, Bar } from './styles';

interface HamburgerProps {
  sidebar: boolean,
  toggle: (value: boolean) => void,
}

export const Hamburger: FC<HamburgerProps> = ({ sidebar, toggle }) => (
  <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
    <Bar top sidebar={sidebar} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </Wrapper>
);